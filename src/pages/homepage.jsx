import React from "react";
import { Topbar } from "../components/topbar";
import { Board } from "../components/board";
import { DeleteBox } from "../components/deleteBox";
import { AddNewListForm } from "../components/list/addNewList";
import { AddNewTicketForm } from "../components/ticket/addTicket";
import { EditTicketForm } from "../components/ticket/editTicket";
import { EditListForm } from "../components/list/editList";
import { v4 } from "uuid";

const listsId = ["L" + v4(), "L" + v4(), "L" + v4()];



const dummyListsOrder = [listsId[0], listsId[1], listsId[2]];
const dummyLists = [
  {
    id: listsId[0],
    title: "Todo ",
    color: 'white',
    tickets: [
    
    ],
  },
  {
    id: listsId[1],
    title: "In Progress ",
    color: 'green',
    tickets: [
    ],
  },
  {
    id: listsId[2],
    title: "Done",
    color: 'red',
    tickets: [
      {
        id: v4(),
        title: "Finish UI",
        description: "UI Must be finished asap",
        priority:"None"
      },
    ],
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
      showUpdateList: false
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
    this.showUpdateList = this.showUpdateList.bind(this);
    this.closeUpdateList = this.showUpdateList.bind(this);
    this.editList = this.editList.bind(this);
  }

  addNewList(list) {
    let newList = list;
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

  showUpdateList(list){
    this.setState({
      activeList: list,
      showUpdateList: !this.state.showUpdateList
    });
  }

  closeUpdateList(){
    this.setState({
      showUpdateList: false
    })
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
      showUpdateList: false,
    });
  }

  showUpdateTicketForm(ticket, list) {
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

  editList(newList){
    
    let filteredList = this.state.lists.map(list=>{
      if(list.id === newList.id)
      {
        return newList;
      }
      return list;
    });

    this.setState({
      lists: filteredList,
      showUpdateList: false
    })
   
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
            
        {/* {this.state.lists.length === 0 && 
        <div>
        <h2>Welcome To KanHero</h2>
        <h3>Create Your First List</h3>

        </div>
        } */}
            <Board
              lists={this.state.lists}
              addList={this.showAddListForm}
              editList={this.showUpdateList}
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
            {this.state.showUpdateList && (
              <EditListForm
                list = {this.state.activeList}
                editList={this.editList}
                closeForm ={this.closeUpdateList}
                deleteList={this.showDeleteBox}
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
