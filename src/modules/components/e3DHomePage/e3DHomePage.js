import "@lwc/synthetic-shadow";
import { LightningElement } from "lwc";

import invokeAPI from "@salesforce/invokeAPI";

export default class E3DHomePageComponent extends LightningElement {

    data = [ 
        {
            "name": "Alisha",
            "age": 20
        },
        {
            "name": "Deekshant",
            "age": 21
        },
        {
            "name": "Jun",
            "age": 29
        }
    ]

    csmData = [];

    connectedCallback() {
        this.getCustomers();
    }

    getCustomers() {
        invokeAPI({jsonRequest: JSON.stringify(""), type: 'GET'})
        .then(result => {
            this.csmData = JSON.parse((result));
            console.log("csmData =>",JSON.stringify(this.csmData, null, 2));
        })
        .catch(err => {
            console.log(err);
        })
    }
}