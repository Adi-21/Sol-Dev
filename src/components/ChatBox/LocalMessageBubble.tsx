import { TPeerMetadata } from '../../lib/types';
import { useLocalPeer } from '@huddle01/react/hooks';
import { TMessage } from './ChatBox';

interface Props {
    message: TMessage;
}

function LocalMessageBubble({ message }: Props) {
    const { metadata } = useLocalPeer<TPeerMetadata>();

    return (
        <div className="w-full items-end flex flex-col rounded-lg">
            <span className="text-white text-sm">{message.text}</span>
        </div>
    );
}

export default LocalMessageBubble;
