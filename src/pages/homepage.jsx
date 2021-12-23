import React from "react";
import { Topbar } from "../components/topbar";
import { ShowLists } from "../components/board";
import { DeleteBox } from "../components/deleteBox";
import styled from "styled-components";
import { AddNewListForm } from "../components/list/addNewList";
import { AddNewTicketForm } from "../components/ticket/addTicket";
import { EditTicketForm } from "../components/ticket/editTicket";
import { v4 } from "uuid";
import { MdOutlineZoomOut } from "react-icons/md";

// const ticketId=['T'+v4(),'T'+v4(),'T'+v4(),'T'+v4()]
const listsId = ["L" + v4(), "L" + v4(), "L" + v4()];

// const dummyTickets=[
//     {
//         id:ticketId[0],
//         title: 'ticket 1',
//         description: 'desc1',
//     },
//     {
//         id:ticketId[1],
//         title: 'ticket 2',
//         description: 'desc2',
//     },
//     {
//         id:ticketId[2],
//         title: 'ticket 3',
//         description: 'desc3',
//     },
//     {
//         id:ticketId[3],
//         title: 'ticket 4',
//         description: 'desc4',
//     },
// ]
// const dummyLists =[
//     {
//         id: listsId[0],
//         title: 'Todo',
//         tickets:[ticketId[0],ticketId[1],ticketId[2]]
//     },
//     {
//         id: listsId[1],
//         title: 'In Progress',
//         tickets:[ticketId[3]]
//     },
// ]

const dummyListsOrder = [listsId[0], listsId[1], listsId[2]];
const dummyLists = [
  {
    id: listsId[0],
    title: "Todo ",
    tickets: [
      {
        id: v4(),
        title: "Finish UI",
        description: "UI Must be finished asap",
      },
    ],
  },
  {
    id: listsId[1],
    title: "In Progress ",
    tickets: [
      // {
      //     title: 'Finish UI',
      //     description: 'UI Must be finished asap'
      // },
    ],
  },
  {
    id: listsId[2],
    title: "Done",
    tickets: [],
  },
];

class Homepage extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      lists: dummyLists,
      // tickets: dummyTickets,
      listsOrder: dummyListsOrder,
      activeList: {},
      activetTicket: {},
      title: "KanHero",
      showAddList: false,
      showAddTicket: false,
      showListDeleteBox: false,
      showTicketDeleteBox: false,
      showUpdateTicket: false,
    };
    this.showAddListForm = this.showAddListForm.bind(this);
    this.closeAddListForm = this.closeAddListForm.bind(this);
    this.showAddTicketForm = this.showAddTicketForm.bind(this);
    this.closeAddTicketForm = this.closeAddTicketForm.bind(this);
    this.addNewList = this.addNewList.bind(this);
    this.addNewTicket = this.addNewTicket.bind(this);
    this.showDeleteBox = this.showDeleteBox.bind(this);
    this.deleteList = this.deleteList.bind(this);
    this.closeDeleteBox = this.closeDeleteBox.bind(this);
    this.showUpdateTicketForm = this.showUpdateTicketForm.bind(this);
    this.closeUpdateTicketForm = this.closeUpdateTicketForm.bind(this);
    this.deleteTicket = this.deleteTicket.bind(this);
    this.changeTicketStatus = this.changeTicketStatus.bind(this);
    this.editTicket = this.editTicket.bind(this);
  }

  addNewList(list) {
    let newList = list;
    console.log("New List is ", newList);
    this.setState({
      lists: [...this.state.lists, newList],
    });
  }

  showAddListForm() {
    this.setState({
      showAddList: true,
    });
  }

  closeAddListForm() {
    this.setState({
      showAddList: false,
    });
  }

  showAddTicketForm(list) {
    this.setState({
      showAddTicket: true,
      activeList: list,
    });
  }

  showDeleteBox(item, type) {
    if (type === "list") {
      this.setState({
        showListDeleteBox: true,
        activeList: item,
      });
    } else {
      this.setState({
        showTicketDeleteBox: true,
      });
    }
  }

  closeDeleteBox() {
    this.setState({
      showListDeleteBox: false,
      showTicketDeleteBox: false,
    });
  }

  closeAddTicketForm() {
    this.setState({
      showAddTicket: false,
    });
  }

  addNewTicket(ticket) {
    let newTicket = ticket;
    this.setState({
      activeList: this.state.activeList.tickets.push(newTicket),
    });
  }

  deleteList() {
    let filteredList = this.state.lists.filter((list) => {
      return list.id !== this.state.activeList.id;
    });
    this.setState({
      lists: filteredList,
      activeList: {},
    });
  }

  showUpdateTicketForm(ticket, list) {
    console.log("This ticket  ---> ", ticket)

    this.setState({
      showUpdateTicket: true,   
      activetTicket: ticket,
      activeList: list
    }, 
    );
    

  }

  closeUpdateTicketForm() {
    this.setState({
      showUpdateTicket: false,
    });
  }

  deleteTicket() {
    console.log("Deleting Ticket");
    const newState = {
        ...this.state,
        lists: this.state.lists.map((list)=>{
            if(list.id === this.state.activeList.id)
            {
                list.tickets.splice(this.state.activetTicket.index, 1)
            }
            return list;
        }),
          showUpdateTicket: false,
          showTicketDeleteBox: false,
      };
  
      this.setState(newState);

  }
  
  editTicket(newTicket){
      let ticket = newTicket.ticket;
      
    const newState = {
        ...this.state,
        lists: this.state.lists.map((list)=>{
            if(list.id === this.state.activeList.id)
            {
                list.tickets.splice(this.state.activetTicket.index, 1, ticket);
            }
            return list;
        }),
        showUpdateTicket: false,
      };
      this.setState(
          newState
)

  }

  changeTicketStatus(destination, source) {
    console.log("From", source);
    console.log("To", destination);

    if (!destination) {
      console.log("Not dropped in droppable");
      return;
    }

    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      console.log("Dropped in same place");
      return;
    }

    //Step 1 ----> Make a copy of the ticket
    //Step 2 ----> Delete the ticket from source list
    //Step 3 ----> Add the copy to the destination list

    const ticketCopy = {
      ...this.state.lists.filter((list) => list.title === source.droppableId)[0]
        .tickets[source.index],
    };

    if (
      source.droppableId === destination.droppableId &&
      destination.index !== source.index
    ) {
      console.log(
        "Change position in same column from i = ",
        source.index,
        " to i = ",
        destination.index
      );

      // return
    }

    const newState = {
      ...this.state,
      lists: this.state.lists.map((list, index) => {
        if (list.title === source.droppableId) {
          list.tickets.splice(source.index, 1);
        }
        if (list.title === destination.droppableId) {
          list.tickets.splice(destination.index, 0, ticketCopy);
        }
        return list;
      }),
    };

    this.setState(newState);
  }

  render() {
    return (
      <div className="homepage">
        <Topbar>{this.state.title}</Topbar>

        <center>
          <div className="centerCard">
            <ShowLists
              lists={this.state.lists}
              addList={this.showAddListForm}
              addTicket={this.showAddTicketForm}
              editTicket={this.showUpdateTicketForm}
              deleteItem={this.showDeleteBox}
              changeTicketStatus={this.changeTicketStatus}
            />

            {this.state.showAddList && (
              <AddNewListForm
                closeForm={this.closeAddListForm}
                addList={this.addNewList}
              />
            )}
            {this.state.showAddTicket && (
              <AddNewTicketForm
                closeForm={this.closeAddTicketForm}
                addTicket={this.addNewTicket}
                list={this.state.activeList}
              />
            )}
            {this.state.showListDeleteBox && (
              <DeleteBox
                closeForm={this.closeDeleteBox}
                deleteList={this.deleteList}
              />
            )}
            {this.state.showUpdateTicket && (
              <EditTicketForm
                closeForm={this.closeUpdateTicketForm}
                addTicket={this.addNewTicket}
                ticket={this.state.activetTicket.ticket}
                index ={this.state.activetTicket.index}
                editTicket={this.editTicket}
                deleteTicket={this.showDeleteBox}
              />
            )}
            {this.state.showTicketDeleteBox && (
              <DeleteBox
                closeForm={this.closeDeleteBox}
                deleteList={this.deleteTicket}
              />
            )}
          </div>
        </center>
      </div>
    );
  }
}
export default Homepage;
