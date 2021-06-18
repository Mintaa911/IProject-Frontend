import React,{Component} from "react";


export default class Role extends Component{


    render(){
        return(
            <div className="flex w-auto justify-center rounded-lg  bg-white px-2">
                <div
                 className="role flex badge py-2 mx-1 mx-md-3"
                 onClick={()=>{this.props.onRoleChange("student")}}
                 >
                    <i class="fas fa-lg fa-user-alt mb-1"></i><div>Student</div>
                </div>
                <div
                 className="role flex badge py-2 mx-1 mx-md-3"
                 onClick={()=>{this.props.onRoleChange("teacher")}}
                 >
                    <i class="fas fa-user-tie fa-lg mb-1"></i><div>Teacher</div>
                </div>
                <div
                 className="role flex badge py-2 mx-1 mx-md-3"
                 onClick={()=>{this.props.onRoleChange("admin")}}
                 >
                    <i class="fas fa-user-shield fa-lg mb-1"></i><div>Admin</div>
                </div>
                <div
                 className="role flex badge py-2 mx-1 mx-md-3"
                 onClick={()=>{this.props.onRoleChange("company")}}
                 >
                    <i class="fas fa-university fa-lg mb-1"></i><div>Company</div>
                </div>   
            </div>
        )
    }
}