import React from "react"
import { Topbar } from "../components/topbar";
import { ShowLists } from "../components/board";
import { DeleteBox } from "../components/deleteBox";
import styled from "styled-components";
import { AddNewListForm } from "../components/list/addNewList";
import { AddNewTicketForm } from "../components/ticket/addTicket";
import { EditTicketForm } from "../components/ticket/editTicket";
import { v4 } from "uuid";

const dummyLists=[
    {
        id:v4(),
        title: 'Todo ',
        tickets:[
            // {
            //     title: 'Finish Logic',
            //     description: 'How to add lists/tickets'
            // },
            // {
            //     title: 'Finish Functionality',
            //     description: 'Drag and drop functionality must be done asap'
            // },
            
            // {
            //     title: 'Prepare for interview',
            //     description: 'Drag and drop functionality must be done asap'
            // },
        ]
},
{
    id:v4(),
    title: 'In Progress ',
    tickets:[
        // {
        //     title: 'Finish UI',
        //     description: 'UI Must be finished asap'
        // },
    ]
},{
    id:v4(),
    title:'Done',
    tickets:[]
}
]



class Homepage extends React.PureComponent{
    
    constructor(props){
        super();
        this.state={
            lists: [],
            activeList:{},
            title: 'KanHero',
            showAddList: false,
            showAddTicket: false,
            showListDeleteBox:false,
            showTicketDeleteBox:false,
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

    }

    addNewList(list){
        let newList = list;  
        console.log("New List is ", newList)
        this.setState({
            lists: [...this.state.lists, newList]
        })
    }

    showAddListForm(){
        this.setState({
            showAddList: true,
        }
        );
    }

    closeAddListForm(){
        this.setState({
            showAddList: false,
        }
        );
    }

    showAddTicketForm(list){
        this.setState({
            showAddTicket: true,
            activeList: list
        })
    }

    showDeleteBox(item, type){
        if(type==='list'){
        this.setState({
            showListDeleteBox: true,
            activeList: item
        })
    }else{
        this.setState({
            showTicketDeleteBox: true,
        })
        }

    }

    closeDeleteBox(){
        
        this.setState({
            showListDeleteBox: false,
            showTicketDeleteBox: false,

        })

    }

    closeAddTicketForm(){
       this.setState({
        showAddTicket: false
    })
    }

    addNewTicket(ticket){
        let newTicket = ticket;
        this.setState({
            activeList: this.state.activeList.tickets.push(newTicket),
        })
    }

    deleteList (){
        let filteredList = this.state.lists.filter((list)=>{
            return list.id !== this.state.activeList.id;
        })
        this.setState({
            lists: filteredList,
            activeList: {}
        })
    }

    showUpdateTicketForm(ticket){
        console.log("The recieved ticket is ---> ", ticket);
        
        this.setState({
            showUpdateTicket: true,
        })
    }

    closeUpdateTicketForm(){
        this.setState({
            showUpdateTicket: false,
        })
    }

    deleteTicket(){
    console.log("Deleting Ticket")

        this.setState({
            showUpdateTicket:false,
            showTicketDeleteBox:false
        })
    }
    changeTicketStatus(destination, source){
        console.log("From", source)
        console.log("To", destination);
        

        if(!destination){
            console.log("Not dropped in droppable");
            return;}


        if(destination.index === source.index && destination.droppableId === source.droppableId){
            console.log("Dropped in same place");
            return;
        }

        //Step 1 ----> Make a copy of the ticket
        //Step 2 ----> Delete the ticket from source list
        //Step 3 ----> Add the copy to the destination list
        
        const ticketCopy ={...this.state.lists.filter((list)=>list.id === source.droppableId)[0].tickets[source.index]}

    
        this.setState(
            {
                lists:
                this.state.lists.map((list, index)=>{
                    console.log("RUN=> ",index, list.title)

                if(list.id === source.droppableId && destination.droppableId !== source.droppableId ){
                    list.tickets.splice(source.index, 1);
                }
                 if(list.id === destination.droppableId  && destination.droppableId !== source.droppableId)
                {
                    list.tickets.splice(destination.index, 0, ticketCopy)
                }
                return list;
            }) }
        )

   
        // let sourceList =this.state.lists.filter((list)=>list.id === source.droppableId)[0]
        // let destinationList = {...this.state.lists.filter((list)=>list.id === destination.droppableId)[0]}

        // sourceList = sourceList.tickets.splice(source.index,1)
        // destinationList.tickets.push(ticketCopy);
        // this.setState({})
    }



 
   render(){
 
    return  <div className="homepage">
    <Topbar>
       {this.state.title}
    </Topbar>

    <center>
    <div className="centerCard">
    <ShowLists lists={this.state.lists} addList={this.showAddListForm} addTicket={this.showAddTicketForm} editTicket ={this.showUpdateTicketForm} deleteItem={this.showDeleteBox} changeTicketStatus={this.changeTicketStatus}/>
    {this.state.showAddList  && <AddNewListForm closeForm={(this.closeAddListForm)} addList={this.addNewList}/>}
    {this.state.showAddTicket && <AddNewTicketForm closeForm ={this.closeAddTicketForm} addTicket={this.addNewTicket} list ={this.state.activeList} />}
    {this.state.showListDeleteBox && <DeleteBox  closeForm = {this.closeDeleteBox} deleteList = {this.deleteList}/>}
    {this.state.showUpdateTicket && <EditTicketForm closeForm ={this.closeUpdateTicketForm} addTicket={this.addNewTicket} ticket={this.state.activeTicket} deleteTicket={this.showDeleteBox}/>}
    {this.state.showTicketDeleteBox && <DeleteBox  closeForm = {this.closeDeleteBox} deleteList = {this.deleteTicket}/>}

    
    
    </div>
    
    </center>
</div>
 
   }
}
export default  Homepage;
