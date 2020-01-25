import axios from 'axios';

export async function createMove(position) {
    try {
        const response = await axios.post(`/api/v1/moves`, {square: position});
        return response;
    }

    catch(error) {
        alert('Something went wrong!');
    }
}

export async function getMoves() {
    try {
        const response = await axios.get(`/api/v1/moves`);
        return response;
    }

    catch(error) {
        alert('Something went wrong!');
    }
}