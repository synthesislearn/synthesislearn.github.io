/* Declares the SynthTeacher Audio Worklet Processor */

class SynthTeacher_AWP extends AudioWorkletGlobalScope.WAMProcessor
{
  constructor(options) {
    options = options || {}
    options.mod = AudioWorkletGlobalScope.WAM.SynthTeacher;
    super(options);
  }
}

registerProcessor("SynthTeacher", SynthTeacher_AWP);
