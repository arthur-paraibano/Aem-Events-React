import { MapTo } from '@adobe/aem-react-editable-components';

// Define a configuração de edição para o AEM
const EventEditConfig = {
    emptyLabel: 'Event',
    isEmpty: function (props) {
        return !props || !props.title;
    }
};

// Crie o componente React
const Event = ({ title, description }) => {
    if (!title) {
        return null;
    }
    return (
        <div className="event">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

// Mapeie o componente React para o componente AEM
// 'eventsmap/components/event' é o resourceType que definimos no Sling Model
MapTo('eventsmap/components/event')(Event, EventEditConfig);

export default Event;