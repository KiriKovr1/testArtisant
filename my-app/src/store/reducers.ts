export const ADDUSER: String = 'ADDUSER'


export interface User {
    id: Number,
    name: String,
    username: String,
    email: String,
    address: {
        street: String,
        suite: String,
        city: String,
        zipcode: String,
        geo: {
            lat: String,
            lng: String
        }
    },
    phone: String,
    website: String,
    company: {
        name: String,
        catchPhrase: String,
        bs: String
    }
}


export const initialState: User = {
    id: 0,
    name: '',
    username: '',
    email: '',
    address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
            lat: '',
            lng: ''
        }
    },
    phone: '',
    website: '',
    company: {
        name: '',
        catchPhrase: '',
        bs: ''
    }
}

export const UpdateUserReducer = (state = initialState, action: { type: String, userinfo: User }) => {
    switch (action.type) {
        case ADDUSER:
            return {
                ...state,
                id: action.userinfo.id,
                name: action.userinfo.name,
                username: action.userinfo.username,
                email: action.userinfo.email
            }
        default:
            return state
    }
}

export const updateUser = (data: User) => {
    return {type: ADDUSER, userinfo: data}
}