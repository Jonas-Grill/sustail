import Popup from 'reactjs-popup';
import Score from "./Score";

export default function ScoreWithInfo({score}: { score: number }) {
    return (
        <div className="mt-4">
            <div className="mt-4">
                <div className="flex items-center">
                    <p className="mr-3 text-xl font-medium text-sustail">Sustainability Score:</p>
                    <Score score={score}/>
                    <p className="sr-only">{score} out of 5 stars</p>
                </div>
            </div>
            <Popup trigger={<button
                className="mt-3 text-sm font-medium text-sustail hover:text-sustail-dark"> Score
                Calculation Info </button>}
                   position="right center">
                {/* Pop Up Content */}
                <div className="px-4 text-sm">
                    <p className="font-medium">How our score is calculated:</p>
                    <ul className="list-disc text-gray-600">
                        <li>Organic Label (30%)</li>
                        <li>Packaging (20%)</li>
                        <li>Transportation Method (50%)</li>
                    </ul>
                </div>
            </Popup>
        </div>
    )
}