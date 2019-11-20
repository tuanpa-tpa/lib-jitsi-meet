/**
 * Event generated by {@link TrackVADEmitter} when PCM sample VAD score is available.
 *
 * @event
 * @type {Object}
 * @property {Date}   timestamp - Exact time at which processed PCM sample was generated.
 * @property {number} score - VAD score on a scale from 0 to 1 (i.e. 0.7)
 * @property {string} deviceId - Device id of the associated track.
 */
export const VAD_SCORE_PUBLISHED = 'detection.vad_score_published';

/**
 *  Event generated by {@link VADTalkMutedDetection} when a user is talking while the mic is muted.
 *
 *  @event
 *  @type {Object}
 */
export const VAD_TALK_WHILE_MUTED = 'detection.vad_talk_while_muted';