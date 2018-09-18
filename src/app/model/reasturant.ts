import { Contact } from './contact';
import { Location} from './Location';
export class Reasturant {
    public name: string;
    public backgroundImageURL: string;
    public category: string;
    public contact: Contact = new Contact();
    public location: Location = new Location();
}
