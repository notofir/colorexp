function createHint({groups = [{size: 0, certainty: 0}], delay = 0, autoHintClicks = -1}) {
    return {
        groups: groups,
        delay: delay,
        autoHintClicks: autoHintClicks,
    }
}

export default createHint;