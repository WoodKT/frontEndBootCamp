// https://crudcrud.com/Dashboard/2b721f5c376449c1a407919d67b3a9f1
// // Requiring module // fix? https://sebhastian.com/javascript-require-is-not-defined/
// const express = require('express');
// const cors = require('cors');
  
// // Creating express app object
// const app = express();
  
// // CORS is enabled for the selected origins
// let corsOptions = {
//     origin: 'https://crudcrud.com/api/2b721f5c376449c1a407919d67b3a9f1/kids'
// };
// // Using cors as a middleware
// app.get('/crud-articles',cors(corsOptions),
//     (req,res) => res.json('crud-articles'))
  
// // Port number
// const port = 5000;
  
// // Server setup
// app.listen(port, () => `Server running on port ${port}`);

// //https://www.geeksforgeeks.org/how-to-deal-with-cors-error-in-express-node-js-project/?ref=rp

//const http = require("http");
import http from 'http';
const port = 8080;

http
  .createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "http://localhost:8080",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
    };

    if (req.method === "OPTIONS") {
      res.writeHead(204, headers);
      res.end();
      return;
    }

    if (["GET", "POST"].indexOf(req.method) > -1) {
      res.writeHead(200, headers);
      res.end("Hello World");
      return;
    }

    res.writeHead(405, headers);
    res.end(`${req.method} is not allowed for the request.`);
  })
  .listen(port);

  const headers = {
    "Access-Control-Allow-Origin": "http://localhost:8080",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers too */
  };
//https://bigcodenerd.org/enable-cors-node-js-without-express/
//https://socket.io/docs/v4/handling-cors/ //not yet tried

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
    static url = "http://localhost:8080";

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
            url : `${this.url}/${kid._id}`,
            dataType: 'json',
            async: false,
            cache: false,
            contentType: 'application/json',
            data: JSON.stringify({
                "name" : store.name,
                "items" : store.actions}),
            type: 'PUT'
        }); //remove semicolon?
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
        console.log("DOMManager.getAllKids()");
        KidService.getAllKids().then(kids => this.render(kids));
    }

    static createKid(name) {
        console.log(`Creating a kid: ${name}`);
        KidService.createKid(new Kid(name))
            .then(() => {
                return KidService.getAllKids();
            })
            .then((kids) => this.render(kids));
        }

    static deleteKid(id) {
        console.log(`Deleting a kid`);
        KidService.deleteKid(id)
            .done(() => {
                return KidService.getAllKids();
            })
            .then((kids) => this.render(kids));
        }

        static addAction(id) {
            for (let kid of this.kids) {
                if (kid._id == id) {
                    kid.actions.push(new Action($(`#${kid._id}-action-name`).val(), $(`#${kid._id}-action-time`).val()));
                    KidService.updateKid(kid)
                        .done(() => {
                            return KidService.getAllKids();
                        })
                    .done(kids => this.render(kids));
                }
            }
        }

        static deleteAction(kidId, actionName) { 
            for (let i = 0; i < this.kids.length; i++) { 
                const kid = this.kids[i];
                if (kid._id == kidId) {
                    for (let i=0; i < kid.actions.length; i++) {
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
        // static deleteAction(kidId, actionId) { //possibly actionId to actionName //original
        //     for (let kid of this.kids) { //i and i++?
        //         if (kid._id == kidId) {
        //             for (let action of kid.actions) {
        //                 if (action._id == actionId) {
        //                     kid.actions.splice(kid.actions.indexOf(action), 1);
        //                     KidService.updateKid(kid)
        //                     .done(() => {//changed this to done
        //                         return KidService.getAllKids();
        //                     })
        //                     .done(kids => this.render(kids)); //changed then to done
        //                 }
        //             }
        //         }
        //     }
        // }

    static render(kids) {
        this.kids = kids;
        $('#app').empty();
        for (let kid of kids) {
            $('#app').prepend(
                `<div id="${kid._id}" class="card">
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
                    <button class="btn btn-danger" onclick="DOMManager.deleteAction('${kid._id}', '${action.name}')">Delete Action</button>`
                ); 
            }
        }
    }
}

$('#create-new-kid').on('click', () => {
    DOMManager.createKid($('#new-kid-name').val());
    $('#new-kid-name').val(' ');
});

DOMManager.getAllKids();