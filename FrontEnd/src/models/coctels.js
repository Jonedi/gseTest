import { Model } from "pinia-orm";

export default class Coctels extends Model {
    static entity = "coctels"

    static fields() {
        return {
            id:     this.uid(),
            name:   this.string('')
        }
    }
}