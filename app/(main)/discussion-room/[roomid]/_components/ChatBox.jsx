
import { Button } from '@/components/ui/button'
import { api } from '@/convex/_generated/api';
import { AIModelToGenerateFeedbackAndNotes } from '@/services/GlobalServices'
import { useMutation } from 'convex/react';
import { LoaderCircle } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'sonner';

function ChatBox({ conversation, enableFeedbackNotes, coachingOption }) {

    const [loading, setLoading] = useState(false);
    const updateSummery = useMutation(api.DiscussionRoom.UpdateSummery);
    const { roomid } = useParams();

    const GenerateFeedbackNotes = async () => {
        setLoading(true);

        try {
            const result = await AIModelToGenerateFeedbackAndNotes(coachingOption, conversation);
            console.log("feedback: ", result);
            console.log("feedback: ", result.content);
            setLoading(false);
            await updateSummery({
                id: roomid,
                summery: result.content
            })

            setLoading(false);
            toast('Feedback Saved!');
        }
        catch(e) {
            setLoading(false);
            toast('Internal Server error, try again after some time!');
            console.log("feedback error: ", e);
        }
    }

    return (
        <div>
            <div className='h-[60vh] bg-secondary border rounded-xl flex flex-col relative p-4 overflow-auto scrollbar-hide'>
                {conversation.map((item, index) => (
                    <div key={index} className={`flex ${item.role == 'user' && 'justify-end'}`}>
                        {/* <h2> */}
                        {item?.role == 'assistant'
                            ? <h2 className='p-1 px-2 bg-primary mt-2 text-white inline-block rounded-md'> {item?.content} </h2>
                            : <h2 className='p-1 px-2 bg-gray-200 mt-2 inline-block rounded-md justify-end'> {item?.content} </h2>
                        }
                        {/* </h2> */}
                    </div>
                ))}
            </div>
            {!enableFeedbackNotes ? 
                <h2 className='mt-4 text-gray-400 text-sm'>  </h2>
                : <Button onClick={GenerateFeedbackNotes} disabled={loading} className={'mt-7 w-full'}>
                    {loading && <LoaderCircle className='animate-spin' />} Generate Feedback
                </Button>
            }
        </div>
    )
}

export default ChatBox