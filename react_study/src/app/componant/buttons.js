import React from "react";


function handleClick() {
    alert('당신!! 로그인할 수 없어')
}

export class CommonButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Sang Won Park'
        }
    }

    render() {
        return (
            <>
                <div>
                    <h4 style={{color: 'purple'}}>
                        {this.props.title}
                    </h4>
                </div>
                <button onClick={handleClick}
                        type='button'>
                    {this.props.name}
                </button>
            </>
        )
    }
}