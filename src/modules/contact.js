export default function contact() {
  const contactInfo = document.createElement("div");
  contactInfo.classList.add("contact-info");

  const contactHeading = document.createElement("h2");
  contactHeading.classList.add("heading");

  const address = document.createElement("p");
  const tel = document.createElement("p");
  const email = document.createElement("p");
  address.innerText = "1234 Je T'aime Street, Anytown France";
  tel.innerText = "666-666-66";
  email.innerText = "info@secretgardenbistro.com";

  const contact = document.createElement("div");
  contact.classList.add("contact");

  contactInfo.append(contactHeading, address, tel, email);
  contact.append(contactInfo);

  return contact;
}
