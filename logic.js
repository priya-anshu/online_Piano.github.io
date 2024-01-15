function playPiano(noteIndex) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const frequency = getFrequency(noteIndex);

    const oscillator = createOscillator(frequency);
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5); // Stop the note after 0.5 seconds

    function createOscillator(frequency) {
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'sine'; // You can experiment with different oscillator types
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.connect(audioContext.destination);
        return oscillator;
    }

    function getFrequency(noteIndex) {
        // Array of frequencies corresponding to piano notes (you can adjust these)
        const pianoNotes = [261.63, 277.18, 293.66, 311.13, 329.63, 349.23,
                            369.99, 392.00, 415.30, 440.00, 466.16, 493.88, 523.25];
        return pianoNotes[noteIndex];
    }
}
