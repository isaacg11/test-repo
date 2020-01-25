import React, { Component } from 'react';
import { getMoves } from '../actions/index';
import Navbar from '../components/Navbar';
import './history.css';

class History extends Component {

    state = {}

    async componentDidMount() {
        let moves = await getMoves();
        this.setState({history: moves});
    }

    render() {

        let { history = {data: []} } = this.state;

        return (
            <div>
                <Navbar />
                
                {/* history start */}
                <div className="history-container">
                    <h1>Move History</h1>
                    <table className="history-table center">
                        <tbody>
                        <tr>
                            <th><b>Start</b></th>
                            <th><b>Possible Moves</b></th>
                            <th><b>Date</b></th>
                        </tr>
                            {history.data.map((h, index) => (
                                <tr key={index}>
                                    <td>{h.start}</td>
                                    <td>{h.moves.toString()}</td>
                                    <td>{new Date(h.dt_created).toDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* history end */}

            </div>
        )
    }
}

export default History;