const argv = require("yargs").argv;
const contacts = require("./contacts");

const invokeAction = async({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const contactList = await contacts.listContacts();
            console.log(contactList);
            break;
        case "get":
            const contactById = await contacts.getContactById(id);
            console.log(contactById);
            break;
        case "add":
            const newContact = await contacts.addContact({name, email, phone});
            console.log(newContact)
            break;
        case "remove": 
            const deleteContact = await contacts.removeContact(id);
            console.log(deleteContact);
            break;
        break;
        default: 
            console.log("Unknown action")
    }
}

invokeAction(argv);
