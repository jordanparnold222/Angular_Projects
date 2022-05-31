//This is the model for an "Event" object
export interface IEvent 
{
    id: number
    name: string
    date: Date
    price: number
    imageUrl: string

    //location property is an object itself, containing multiple properties
    location?: 
    {
        address: string
        city: string
        country: string
    },
    //This applies to online events, which means the "location" property would be null
    onlineUrl?: string

    sessions: ISession[]
}

export interface ISession{
    id: number
    name: string
    presenter: string
    duration: number
    level: string
    abstract: string
    voters: string
}