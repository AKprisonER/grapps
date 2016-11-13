/**
 * Created by Dieter on 12/11/2016.
 */

class Providers {

    static clear() {
        for(var provider of Providers.all) {
            provider.apps = [];
        }
    }

    static add(provider) {
        if(this.all === undefined) {
            this.all = [];
        }

        this.all.push(provider);
    }

    static get all() {
        if(this._providers === undefined) {
            return [];

        } else {
            return this._providers;
        }
    }

    static set all(providers) {
        this._providers = providers;
    }

}