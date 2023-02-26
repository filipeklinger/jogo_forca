export interface HiddenWordsProps {
    word: string;
    isHide: boolean;
}
export function HiddenWords({ word, isHide }: HiddenWordsProps) {
    if (isHide) {
        return (
            word.trim().length == 0 ?
                <span className="hidenWords">&ensp;&ensp;</span> :
                <span className="hidenWords">_&ensp;</span>
        )
    } else {
        return (
            word.trim().length == 0 ?
                <span className="hidenWords">&ensp;</span> :
                <span className="hidenWords">{word}&ensp;</span>
        )
    }
}