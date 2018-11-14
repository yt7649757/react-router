import React, {Component} from 'react';
// import {Rate} from 'antd';
import { Link, Route } from 'react-router-dom'
import Template from '../common/template';

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}


export default class Page extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 3,
        };
    }

    handleChange = (value) => {
        this.setState({value});
    }


    render() {
        const { match } = this.props
        console.log(match)
        return (
            <Template>
                <div>
                    <h2>Topics</h2>
                    <ul>
                        <li>
                            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/components`}>Components</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                        </li>
                    </ul>

                    <Route path={`${match.path}/:topicId`} component={Topic} />
                    <Route
                        exact
                        path={match.path}
                        render={() => <h3>Please select a topic.</h3>}
                    />
                </div>
            </Template>
        );
    }
}

