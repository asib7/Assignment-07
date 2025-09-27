const tickets = [
  {
    id: 1001,
    title: "Login Issues - Can't Access Account",
    description:
      "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
    customer: "John Smith",
    priority: "high",
    status: "open",
    createdAt: "2025-01-15",
  },
  {
    id: 1002,
    title: "Payment Failed - Card Declined",
    description:
      "Customer attempted to pay using Visa ending 1234 but the payment keeps failing despite sufficient balance.",
    customer: "Sarah Johnson",
    priority: "high",
    status: "open",
    createdAt: "2025-01-16",
  },
  {
    id: 1003,
    title: "Unable to Download Invoice",
    description:
      "Customer cannot download their January invoice from the billing section. The download button is...",
    customer: "Michael Brown",
    priority: "medium",
    status: "open",
    createdAt: "2025-01-17",
  },

  {
    id: 1004,
    title: "Incorrect Billing Address",
    description:
      "Customer’s billing address shows a different city. They updated it but it still displays the old one.",
    customer: "Emily Davis",
    priority: "low",
    status: "open",
    createdAt: "2025-01-18",
  },
  {
    id: 1005,
    title: "Feature Request: Dark Mode",
    description:
      "Customer reports that the mobile app crashes immediately upon opening on Android 13.",
    customer: "Alice Lee",
    priority: "low",
    status: "open",
    createdAt: "2025-01-19",
  },
  {
    id: 1006,
    title: "App Crash on Startup",
    description:
      "Customer requested a refund two weeks ago but has not received the amount yet.",
    customer: "Tom White",
    priority: "high",
    status: "open",
    createdAt: "2025-01-20",
  },
  {
    id: 1007,
    title: "Refund Request",
    description:
      "Customer is not receiving 2FA codes on their registered phone number. #321…",
    customer: "Kate Park",
    priority: "medium",
    status: "open",
    createdAt: "2025-01-21",
  },
  {
    id: 1008,
    title: "Subscription Cancelled Unexpectedly",
    description:
      "Customer tries to upload a new profile picture but gets 'Upload failed' error.",
    customer: "Victor Hugo",
    priority: "high",
    status: "open",
    createdAt: "2025-01-22",
  },
  {
    id: 1009,
    title: "Email Notifications Not Received",
    description:
      "Customer wants to enable auto-renewal for their subscription but the toggle is disabled.",
    customer: "Daniel Kim",
    priority: "low",
    status: "open",
    createdAt: "2025-01-23",
  },
  {
    id: 1010,
    title: "Slow Page Load Times",
    description:
      "Customer placed an order but didn't receive a confirmation email even though payment succeeded.",
    customer: "Maria Garcia",
    priority: "medium",
    status: "open",
    createdAt: "2025-01-24",
  },
];

const ticketsGrid = document.getElementById("ticketsGrid");
const taskList = document.getElementById("taskList");
const resolvedList = document.getElementById("resolvedList");
const inProgressCount = document.getElementById("inProgressCount");
const resolvedCount = document.getElementById("resolvedCount");

let inProgress = 0;
let resolved = 0;

tickets.forEach((ticket) => {
  const card = document.createElement("div");
  card.className = "ticket-card";
  card.innerHTML = `
    <div class="ticket-header">
      <h4>${ticket.title}</h4>
      <span class="status open">● Open</span>
    </div>
    <p>${ticket.description}</p>
    <div class="ticket-footer">
      <span>#${ticket.id} <span class="priority ${ticket.priority}">
        ${ticket.priority.toUpperCase()} PRIORITY</span></span>
      <span>${ticket.customer}</span>
      <span>${ticket.createdAt}</span>
    </div>`;
  card.addEventListener("click", () => addTask(ticket));
  ticketsGrid.appendChild(card);
});

function addTask(ticket) {
  if (document.getElementById(`task-${ticket.id}`)) {
    alert("Ticket already in Task Status!");
    return;
  }
  inProgress++;
  inProgressCount.textContent = inProgress;

  const taskItem = document.createElement("div");
  taskItem.className = "task-item";
  taskItem.id = `task-${ticket.id}`;
  taskItem.innerHTML = `
     <span>${ticket.title}</span>
     <button>Complete</button>
  `;
  taskItem
    .querySelector("button")
    .addEventListener("click", () => completeTask(ticket, taskItem));
  taskList.appendChild(taskItem);
  alert(`Ticket #${ticket.id} added to Task Status.`);
}

function completeTask(ticket, element) {
  element.remove();
  inProgress--;
  resolved++;
  inProgressCount.textContent = inProgress;
  resolvedCount.textContent = resolved;

  const li = document.createElement("li");
  li.textContent = ticket.title;
  resolvedList.appendChild(li);
  alert(`Ticket #${ticket.id} marked as resolved.`);
}
