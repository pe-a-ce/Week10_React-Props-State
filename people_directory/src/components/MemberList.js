import Member from "./Member";

const MemberList = ({listOfMembers}) => {
    //properties are passed from one container to another, this is the list of members here from Mmber component

    const memberCompnents = listOfMembers.map((member, index) => {
        return <Member member={member} key={index}/>
        // key = allows react to explicitly know which member it is working on? A unique identifier for React
    });

    return (
        <>
            {memberCompnents}
        </>
    )
}

export default MemberList;