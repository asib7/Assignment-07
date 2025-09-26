const tickets = [
  {
    id: "#1001",
    title: "Login Issues - Can't Access Account",
    desc: "Customer is unable to log in to their account...",
    status: "Open",
    priority: "High",
    name: "John Smith",
    date: "1/15/2024",
  },
  {
    id: "#1002",
    title: "Payment Failed - Card Declined",
    desc: "Customer attempted to pay using Visa ending 1234...",
    status: "Open",
    priority: "High",
    name: "Sarah Johnson",
    date: "1/16/2024",
  },
  {
    id: "#1003",
    title: "Unable to Download Invoice",
    desc: "Customer cannot download their January invoice...",
    status: "In-Progress",
    priority: "Medium",
    name: "Michael Brown",
    date: "1/17/2024",
  },
  {
    id: "#1004",
    title: "Incorrect Billing Address",
    desc: "Customer’s billing address shows a different city...",
    status: "Open",
    priority: "Low",
    name: "Emily Davis",
    date: "1/18/2024",
  },
  {
    id: "#1005",
    title: "App Crash on Launch",
    desc: "Customer reports that the mobile app crashes...",
    status: "Open",
    priority: "High",
    name: "David Wilson",
    date: "1/19/2024",
  },
  {
    id: "#1006",
    title: "Refund Not Processed",
    desc: "Customer requested a refund two weeks ago...",
    status: "In-Progress",
    priority: "Medium",
    name: "Sophia Taylor",
    date: "1/20/2024",
  },
  {
    id: "#1007",
    title: "Two-Factor Authentication Issue",
    desc: "Customer is not receiving 2FA codes...",
    status: "Open",
    priority: "High",
    name: "James Anderson",
    date: "1/21/2024",
  },
  {
    id: "#1008",
    title: "Unable to Update Profile Picture",
    desc: "Customer tries to upload a new profile picture...",
    status: "Open",
    priority: "Low",
    name: "Olivia Martinez",
    date: "1/22/2024",
  },
  {
    id: "#1009",
    title: "Subscription Auto-Renewal",
    desc: "Customer wants to enable auto-renewal...",
    status: "In-Progress",
    priority: "Medium",
    name: "Liam Thomas",
    date: "1/17/2024",
  },
  {
    id: "#1010",
    title: "Missing Order Confirmation Email",
    desc: "Customer placed an order but didn't receive a confirmation...",
    status: "Open",
    priority: "Medium",
    name: "Isabella Garcia",
    date: "1/24/2024",
  },
];

const ticketList = document.getElementById("ticketList");
const resolvedTasks = document.getElementById("resolvedTasks");

function renderTickets() {
  tickets.forEach((ticket) => {
    const card = document.createElement("div");
    card.classList.add("ticket-card");
    card.innerHTML = `
      <div class="ticket-header">
        <h4>${ticket.title}</h4>
        <span class="ticket-status ${
          ticket.status === "Open" ? "status-open" : "status-progress"
        }">${ticket.status}</span>
      </div>
      <p>${ticket.desc}</p>
      <p class="priority ${ticket.priority.toLowerCase()}">${
      ticket.priority
    } PRIORITY</p>
      <div class="ticket-footer">
        <span>${ticket.id} | ${ticket.name}</span>
        <span>${ticket.date}</span>
      </div>
    `;

    // Click to resolve
    card.addEventListener("click", () => resolveTicket(ticket));

    ticketList.appendChild(card);
  });
}

function resolveTicket(ticket) {
  const li = document.createElement("li");
  li.textContent = `${ticket.id} - ${ticket.title}`;
  resolvedTasks.appendChild(li);
}

renderTickets();
