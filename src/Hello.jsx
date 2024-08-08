function Hello(props) {
    return (
        <>
        <Line>
            <Profile2 {...props} /><br /></Line>
        </>



    )
}

const Func1 = function () { return "test" }
const Func2 = () => "test2"
const Func3 = props => "test3 " + props.name + props.surname

function Func4(props) {
    return (
        <h1>Hello {props.name} {props.surname}</h1>
    )
}
function Func5({ name, surname = "ku" }) {
    return (
        <h1>Hello {name} {surname}</h1>
    )
}

function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}

function Profile2(props) {
    return (
        <>
            
                Hello {props.name} {props.surname}
           
        </>
    )
}

function Line({ children }) {
    return (
        <><hr />
            {children}
            <hr />
        </>
    )
}
export default Hello
