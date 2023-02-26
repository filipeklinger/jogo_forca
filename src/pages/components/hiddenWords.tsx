export interface HiddenWordsProps {
    word: string;
    isHide: boolean;
}
export function HiddenWords({ word, isHide }: HiddenWordsProps) {
    if (isHide) {
        return (<span className="hidenWords">_&ensp;</span>)
    } else {
        return (<span className="hidenWords">{word}&ensp;</span>)
    }
}