import {GlobeEuropeAfricaIcon} from '@heroicons/react/20/solid'
import Popup from 'reactjs-popup';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Score({score}: { score: number }) {
    return (
        <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
                <GlobeEuropeAfricaIcon
                    key={rating}
                    className={classNames(
                        score > rating ? 'text-sustail' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                />
            ))}
        </div>
    )
}