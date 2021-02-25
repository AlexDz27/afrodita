export const stager = {
  stages: ['serviceCategory', 'service', 'time', 'contactInfo'],

  _currentIdx: 0,
  currentStage: 'serviceCategory',

  back() {
    const prevIdx = this._currentIdx - 1;
    const prevStage = this.stages[prevIdx];

    if (prevStage === undefined) return;

    this._currentIdx = prevIdx;
    this.currentStage = prevStage;
  },

  next() {
    const nextIdx = this._currentIdx + 1;
    const nextStage = this.stages[nextIdx];

    if (nextStage === undefined) return;

    this._currentIdx = nextIdx;
    this.currentStage = nextStage;
  }
};