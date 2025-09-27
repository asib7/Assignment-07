import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/styles.css";

export default function App() {
  useEffect(() => {
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
        toast.warning("Ticket already in Task Status!");
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
      toast.success(`Ticket #${ticket.id} added to Task Status.`);
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
      toast.info(`Ticket #${ticket.id} marked as resolved.`);
    }
  }, []);

  return (
    <>
      {/* Your existing HTML structure stays in public/index.html or JSX */}
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
}
