class Kid {
    constructor(name) {
        this.name = name;
        this.actions = [];
    }

    addAction(name,time) {
        this.actions.push(new Action(name, time));
    }
}

class Action {
    constructor(name, time) {
        this.name = name;
        this.time = time;
    }
}

class KidService {
    static url = "https://crudcrud.com/api/20795a5226174b9e896472ecfb5b150d/kids";
//https://ancient-taiga-31359.herokuapp.com/api/houses
    static getAllKids() {
        return $.get(this.url);
    }

    static getKid(id) {
        return $.get(this.url + `/${id}`);
    }

    static createKid(kid) {
        return $.ajax({
            url: this.url,
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(kid),
            type: 'POST'
        });   
     }

    static updateKid(kid) {
        return $.ajax({
            url: `${this.url}/${kid._id}`,
            dataType: `json`,
            async: false,
            cache: false,
            contentType: 'application/json',
            data: JSON.stringify({
                "name" : kid.name,
                "actions" : kid.actions}),
            type: 'PUT' 
        }); 
    }

    static deleteKid(id) {
        return $.ajax({
            url: `${this.url}/${id}`,
            type: `DELETE`
        });
    }
}

class DOMManager {
    static kids;

    static getAllKids() {
        KidService.getAllKids().then(kids => this.render(kids));
    }

    static createKid(name) {
        KidService.createKid(new Kid(name))
            .then(() => {
                return KidService.getAllKids();
            })
            .then((kids) => this.render(kids));
        }

    static deleteKid(id) {
        KidService.deleteKid(id)
            .done(() => { //then to done
                return KidService.getAllKids();
            })
            .then((kids) => this.render(kids));
        }

        static addAction(id) {
            for (let kid of this.kids) {
                if (kid._id == id) {
                    kid.actions.push(new Action($(`#${kid._id}-action-name`).val(), $(`#${kid._id}-action-time`).val()));
                    KidService.updateKid(kid)
                        .done(() => {//then to done
                            return KidService.getAllKids();
                        
                        })
                        .done(kids => this.render(kids));//removed () around first kids
                }
            }
        }
    
        static deleteAction(kidId, actionName) {
            for (let i = 0; i < this.kids.length; i++) {
                const kid = this.kids[i];
                if (kid._id == kidId) {
                    for (let i = 0; i < kid.actions.length; i++) {
                        const action = kid.actions[i];
                        if (action.name == actionName) {
                            kid.actions.splice(i, 1);
                            KidService.updateKid(kid)
                                .done(() => {
                                    return KidService.getAllKids();
                                })
                                .done(kids => this.render(kids));
                        }
                    }
                }
            }
        }

    static render(kids) {
        this.kids = kids;
        $('#app').empty();
        for (let kid of kids) {
            $('#app').prepend(
                `<br><div id="${kid._id}" class="card">
                    <div class="card-header">
                        <h2>${kid.name}</h2>
                        <button class="btn btn-danger" onclick="DOMManager.deleteKid('${kid._id}')">Delete</button>
                    </div>
                    <div class="card-body">
                        <div class="card">
                            <div class="row">
                                <div class="col-sm">
                                    <input type="text" id="${kid._id}-action-name" class="form-control" placeholder="Action Name">
                                </div>
                                <div class="col-sm">
                                    <input type="text" id="${kid._id}-action-time" class="form-control" placeholder="Action Time">
                                </div>
                            </div>
                            <button id="${kid._id}-new-action" onclick="DOMManager.addAction('${kid._id}')" class="btn btn-primary form-control">Add</button>
                        </div>
                    </div>
                </div><br>`
            );

            for(let action of kid.actions) {
                $(`#${kid._id}`).find('.card-body').append(
                    `<p>
                    <span id="name-${action.name}"><strong>Name: </strong> ${action.name}</span>
                    <span id="time-${action.name}"><strong>Time: </strong> ${action.time}</span>
                    <button class="btn btn-success" onclick="DOMManager.deleteAction('${kid._id}', '${action.name}')">Delete Action</button>`
                );
            }
        }
    }
}

$('#create-new-kid').on('click', () => {  
    DOMManager.createKid($('#new-kid-name').val());
    $('#new-kid-name').val('');
});

DOMManager.getAllKids();