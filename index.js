const { program } = require("commander");

const contactsService = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
      break;
    case "get":
      const getContacts = await contactsService.getContactById(id);
      console.log(getContacts);
      break;

    case "add":
      const newContacts = await contactsService.addContact({
        name,
        email,
        phone,
      });
      console.log(newContacts);
      break;

    case "remove":
      const removeContact = await contactsService.removeContact(id);
      console.log(removeContact);
      break;
    default:
      console.warn("Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);
