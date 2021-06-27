export enum ChartTemplateType {
    Bar = "YGBgY2hhcnRzdmlldwojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IHR5cGUgICAgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwp0eXBlOiBCYXIKCiMtLS0tLS0tLS0tLS0tLS0tLSMKIy0gY2hhcnQgZGF0YSAgICAtIwojLS0tLS0tLS0tLS0tLS0tLS0jCmRhdGE6CiAgLSBhY3Rpb246ICJCcm93c2UgdGhlIHdlYnNpdGUiCiAgICBwdjogNTAwMDAKICAtIGFjdGlvbjogIkFkZCB0byBjYXJ0IgogICAgcHY6IDM1MDAwCiAgLSBhY3Rpb246ICJHZW5lcmF0ZSBvcmRlcnMiCiAgICBwdjogMjUwMDAKICAtIGFjdGlvbjogIlBheSBvcmRlciIKICAgIHB2OiAxNTAwMAogIC0gYWN0aW9uOiAiU2VhbCB0aGUgZGVhbCIKICAgIHB2OiA4NTAwCgojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IG9wdGlvbnMgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwpvcHRpb25zOgogIHhGaWVsZDogInB2IgogIHlGaWVsZDogImFjdGlvbiIKICBjb252ZXJzaW9uVGFnOiB7fQpgYGA=",
    Pie = "YGBgY2hhcnRzdmlldwojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IHR5cGUgICAgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwp0eXBlOiBQaWUKCiMtLS0tLS0tLS0tLS0tLS0tLSMKIy0gY2hhcnQgZGF0YSAgICAtIwojLS0tLS0tLS0tLS0tLS0tLS0jCmRhdGE6CiAgLSB0eXBlOiAiV2FnZSBpbmNvbWUgcGVyIGNhcGl0YSAowqUpIgogICAgdmFsdWU6IDE3OTE3CiAgLSB0eXBlOiAiT3BlcmF0aW5nIG5ldCBpbmNvbWUgcGVyIGNhcGl0YSAowqUpIgogICAgdmFsdWU6IDUzMDcKICAtIHR5cGU6ICJQcm9wZXJ0eSBQZXIgQ2FwaXRhIE5ldCBJbmNvbWUgKMKlKSIKICAgIHZhbHVlOiAyNzkxCiAgLSB0eXBlOiAiVHJhbnNmZXIgb2YgbmV0IGluY29tZSBwZXIgY2FwaXRhICjCpSkiCiAgICB2YWx1ZTogNjE3MwoKIy0tLS0tLS0tLS0tLS0tLS0tIwojLSBjaGFydCBvcHRpb25zIC0jCiMtLS0tLS0tLS0tLS0tLS0tLSMKb3B0aW9uczoKICBhbmdsZUZpZWxkOiAidmFsdWUiCiAgY29sb3JGaWVsZDogInR5cGUiCiAgcmFkaXVzOiAwLjUKICBsYWJlbDoKCXR5cGU6ICJzcGlkZXIiCgljb250ZW50OiAie3BlcmNlbnRhZ2V9XG57bmFtZX0iCiAgbGVnZW5kOgoJbGF5b3V0OiAiaG9yaXpvbnRhbCIKCXBvc2l0aW9uOiAiYm90dG9tIgpgYGAK",
    WordCloud = "YGBgY2hhcnRzdmlldwojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IHR5cGUgICAgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwp0eXBlOiBXb3JkQ2xvdWQKCiMtLS0tLS0tLS0tLS0tLS0tLSMKIy0gY2hhcnQgZGF0YSAgICAtIwojLS0tLS0tLS0tLS0tLS0tLS0jCmRhdGE6CiAgLSB4OiAiQ2hpbmEiCiAgICB2YWx1ZTogMjM4MzIyMDAwMAogICAgY2F0ZWdvcnk6ICJhc2lhIgogIC0geDogIkluZG9uZXNpYSIKICAgIHZhbHVlOiAyNjM1MTAwMDAKICAgIGNhdGVnb3J5OiAiYXNpYSIKICAtIHg6ICJQYWtpc3RhbiIKICAgIHZhbHVlOiAzOTY0NTkwMDAKICAgIGNhdGVnb3J5OiAiYXNpYSIKICAtIHg6ICJSdXNzaWEiCiAgICB2YWx1ZTogNTQ2ODA0MzcyCiAgICBjYXRlZ29yeTogImV1cm9wZSIKICAtIHg6ICJKYXBhbiIKICAgIHZhbHVlOiAxMjY3OTAwMDAKICAgIGNhdGVnb3J5OiAiYXNpYSIKICAtIHg6ICJWaWV0bmFtIgogICAgdmFsdWU6IDkyNzAwMDAwCiAgICBjYXRlZ29yeTogImFzaWEiCiAgLSB4OiAiR2VybWFueSIKICAgIHZhbHVlOiA4MjgwMDAwMAogICAgY2F0ZWdvcnk6ICJldXJvcGUiCiAgLSB4OiAiSXJhbiIKICAgIHZhbHVlOiA4MDEzNTQwMAogICAgY2F0ZWdvcnk6ICJhc2lhIgogIC0geDogIlRoYWlsYW5kIgogICAgdmFsdWU6IDY4Mjk4MDAwCiAgICBjYXRlZ29yeTogImFzaWEiCiAgLSB4OiAiRnJhbmNlIgogICAgdmFsdWU6IDY3MDEzMDAwCiAgICBjYXRlZ29yeTogImV1cm9wZSIKICAtIHg6ICJJdGFseSIKICAgIHZhbHVlOiA2MDU5OTkzNgogICAgY2F0ZWdvcnk6ICJldXJvcGUiCiAgLSB4OiAiU291dGggS29yZWEiCiAgICB2YWx1ZTogNTE0NDYyMDEKICAgIGNhdGVnb3J5OiAiYXNpYSIKICAtIHg6ICJLZW55YSIKICAgIHZhbHVlOiA0ODQ2NzAwMAogICAgY2F0ZWdvcnk6ICJhZnJpY2EiCiAgLSB4OiAiU3BhaW4iCiAgICB2YWx1ZTogNDY4MTIwMDAKICAgIGNhdGVnb3J5OiAiZXVyb3BlIgogIC0geDogIlN1ZGFuIgogICAgdmFsdWU6IDQyMTc2MDAwCiAgICBjYXRlZ29yeTogImFmcmljYSIKICAtIHg6ICJJcmFxIgogICAgdmFsdWU6IDQ3ODgzNTQzCiAgICBjYXRlZ29yeTogImFzaWEiCiAgLSB4OiAiTmVwYWwiCiAgICB2YWx1ZTogMjg4MjU3MDkKICAgIGNhdGVnb3J5OiAiYXNpYSIKICAtIHg6ICJOb3J0aCBLb3JlYSIKICAgIHZhbHVlOiAyNDIxMzUxMAogICAgY2F0ZWdvcnk6ICJhc2lhIgogIC0geDogIkNoaWxlIgogICAgdmFsdWU6IDI4MTkxOTAwCiAgICBjYXRlZ29yeTogImFtZXJpY2EiCgojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IG9wdGlvbnMgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwpvcHRpb25zOgogIHdvcmRGaWVsZDogIngiCiAgd2VpZ2h0RmllbGQ6ICJ2YWx1ZSIKICBjb2xvcjogIiMxMjJjNmEiCiAgd29yZFN0eWxlOgoJZm9udEZhbWlseTogIlZlcmRhbmEiCglmb250U2l6ZTogWzI0LCA4MF0KICBpbnRlcmFjdGlvbnM6Cgl0eXBlOiAiZWxlbWVudC1hY3RpdmUiCiAgc3R5bGU6CiAgICBiYWNrZ3JvdW5kQ29sb3I6ICJ3aGl0ZSIKICBzdGF0ZToKCWFjdGl2ZToKCSAgc3R5bGU6CgkgICAgbGluZVdpZHRoOiAzCmBgYA==",
    Treemap = "YGBgY2hhcnRzdmlldwojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IHR5cGUgICAgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwp0eXBlOiBUcmVlbWFwCgojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IGRhdGEgICAgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwpkYXRhOgogIG5hbWU6ICdyb290JwogIGNoaWxkcmVuOgogICAgLSBuYW1lOiAnRm9sZGVyIDEnCiAgICAgIHZhbHVlOiA1NjAKICAgIC0gbmFtZTogJ0ZvbGRlciAyJwogICAgICB2YWx1ZTogNTAwCiAgICAtIG5hbWU6ICdGb2xkZXIgMycKICAgICAgdmFsdWU6IDE1MAogICAgLSBuYW1lOiAnRm9sZGVyIDQnCiAgICAgIHZhbHVlOiAxNDAKICAgIC0gbmFtZTogJ0ZvbGRlciA1JwogICAgICB2YWx1ZTogMTE1CiAgICAtIG5hbWU6ICdGb2xkZXIgNicKICAgICAgdmFsdWU6IDk1CiAgICAtIG5hbWU6ICdGb2xkZXIgNycKICAgICAgdmFsdWU6IDkwCiAgICAtIG5hbWU6ICdGb2xkZXIgOCcKICAgICAgdmFsdWU6IDc1CiAgICAtIG5hbWU6ICdGb2xkZXIgOScKICAgICAgdmFsdWU6IDk4CiAgICAtIG5hbWU6ICdGb2xkZXIgMTAnCiAgICAgIHZhbHVlOiA2MAogICAgLSBuYW1lOiAnRm9sZGVyIDExJwogICAgICB2YWx1ZTogNDUKICAgIC0gbmFtZTogJ0ZvbGRlciAxMicKICAgICAgdmFsdWU6IDQwCiAgICAtIG5hbWU6ICdGb2xkZXIgMTMnCiAgICAgIHZhbHVlOiA0MAogICAgLSBuYW1lOiAnRm9sZGVyIDE0JwogICAgICB2YWx1ZTogMzUKICAgIC0gbmFtZTogJ0ZvbGRlciAxNScKICAgICAgdmFsdWU6IDQwCiAgICAtIG5hbWU6ICdGb2xkZXIgMTYnCiAgICAgIHZhbHVlOiA0MAogICAgLSBuYW1lOiAnRm9sZGVyIDE3JwogICAgICB2YWx1ZTogNDAKICAgIC0gbmFtZTogJ0ZvbGRlciAxOCcKICAgICAgdmFsdWU6IDMwCiAgICAtIG5hbWU6ICdGb2xkZXIgMTknCiAgICAgIHZhbHVlOiAyOAogICAgLSBuYW1lOiAnRm9sZGVyIDIwJwogICAgICB2YWx1ZTogMTYKCiMtLS0tLS0tLS0tLS0tLS0tLSMKIy0gY2hhcnQgb3B0aW9ucyAtIwojLS0tLS0tLS0tLS0tLS0tLS0jCm9wdGlvbnM6CiAgY29sb3JGaWVsZDogIm5hbWUiCmBgYAo=",
    DualAxes = "YGBgY2hhcnRzdmlldwojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IHR5cGUgICAgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwp0eXBlOiBEdWFsQXhlcwoKIy0tLS0tLS0tLS0tLS0tLS0tIwojLSBjaGFydCBkYXRhICAgIC0jCiMtLS0tLS0tLS0tLS0tLS0tLSMKZGF0YToKICAtCiAgICAtIHRpbWU6ICIyMDE5LTAzIgogICAgICB2YWx1ZTogMzUwCiAgICAgIGNvdW50OiA4MDAKICAgIC0gdGltZTogIjIwMTktMDQiCiAgICAgIHZhbHVlOiA5MDAKICAgICAgY291bnQ6IDYwMAogICAgLSB0aW1lOiAiMjAxOS0wNSIKICAgICAgdmFsdWU6IDMwMAogICAgICBjb3VudDogNDAwCiAgICAtIHRpbWU6ICIyMDE5LTA2IgogICAgICB2YWx1ZTogNDUwCiAgICAgIGNvdW50OiAzODAKICAgIC0gdGltZTogIjIwMTktMDciCiAgICAgIHZhbHVlOiA0NzAKICAgICAgY291bnQ6IDIyCiAgLQogICAgLSB0aW1lOiAiMjAxOS0wMyIKICAgICAgdmFsdWU6IDM1MAogICAgICBjb3VudDogODAwCiAgICAtIHRpbWU6ICIyMDE5LTA0IgogICAgICB2YWx1ZTogOTAwCiAgICAgIGNvdW50OiA2MDAKICAgIC0gdGltZTogIjIwMTktMDUiCiAgICAgIHZhbHVlOiAzMDAKICAgICAgY291bnQ6IDQwMAogICAgLSB0aW1lOiAiMjAxOS0wNiIKICAgICAgdmFsdWU6IDQ1MAogICAgICBjb3VudDogMzgwCiAgICAtIHRpbWU6ICIyMDE5LTA3IgogICAgICB2YWx1ZTogNDcwCiAgICAgIGNvdW50OiAyMgoKIy0tLS0tLS0tLS0tLS0tLS0tIwojLSBjaGFydCBvcHRpb25zIC0jCiMtLS0tLS0tLS0tLS0tLS0tLSMKb3B0aW9uczoKICB4RmllbGQ6ICd0aW1lJwogIHlGaWVsZDogWyd2YWx1ZScsICdjb3VudCddCiAgeUF4aXM6CiAgICB2YWx1ZToKICAgICAgbWluOiAwCiAgICAgIGxhYmVsOgogICAgICAgIGZvcm1hdHRlcjoKICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdHRlcih2YWwpIHsKICAgICAgICAgICAgcmV0dXJuICcnLmNvbmNhdCh2YWwsICfkuKonKTsKICAgICAgICAgIH0KICBnZW9tZXRyeU9wdGlvbnM6CiAgICAtIGdlb21ldHJ5OiAnY29sdW1uJwogICAgLSBnZW9tZXRyeTogJ2xpbmUnCiAgICAgIGxpbmVTdHlsZToKCSAgICBsaW5lV2lkdGg6IDIKYGBgCg==",
    Mix = "YGBgY2hhcnRzdmlldwojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IHR5cGUgICAgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwp0eXBlOiBNaXgKCiMtLS0tLS0tLS0tLS0tLS0tLSMKIy0gY2hhcnQgZGF0YSAgICAtIwojLS0tLS0tLS0tLS0tLS0tLS0jCmRhdGEuYXJlYToKICAtIHRpbWU6IDEyNDY0MDY0MDAwMDAKICAgIHRlbXBlcmF0dXJlOiBbMTQuMywgMjcuN10KICAtIHRpbWU6IDEyNDY0OTI4MDAwMDAKICAgIHRlbXBlcmF0dXJlOiBbMTQuNSwgMjcuOF0KICAtIHRpbWU6IDEyNDY1NzkyMDAwMDAKICAgIHRlbXBlcmF0dXJlOiBbMTUuNSwgMjkuNl0KICAtIHRpbWU6IDEyNDY2NjU2MDAwMDAKICAgIHRlbXBlcmF0dXJlOiBbMTYuNywgMzAuN10KICAtIHRpbWU6IDEyNDY3NTIwMDAwMDAKICAgIHRlbXBlcmF0dXJlOiBbMTYuNSwgMjUuMF0KICAtIHRpbWU6IDEyNDY4Mzg0MDAwMDAKICAgIHRlbXBlcmF0dXJlOiBbMTcuOCwgMjUuN10KCmRhdGEubGluZToKICAtIHRpbWU6IDEyNDY0MDY0MDAwMDAKICAgIHRlbXBlcmF0dXJlOiAyMS41CiAgLSB0aW1lOiAxMjQ2NDkyODAwMDAwCiAgICB0ZW1wZXJhdHVyZTogMjIuMQogIC0gdGltZTogMTI0NjU3OTIwMDAwMAogICAgdGVtcGVyYXR1cmU6IDIzCiAgLSB0aW1lOiAxMjQ2NjY1NjAwMDAwCiAgICB0ZW1wZXJhdHVyZTogMjMuOAogIC0gdGltZTogMTI0Njc1MjAwMDAwMAogICAgdGVtcGVyYXR1cmU6IDIxLjQKICAtIHRpbWU6IDEyNDY4Mzg0MDAwMDAKICAgIHRlbXBlcmF0dXJlOiAyMS4zCgojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IG9wdGlvbnMgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwpvcHRpb25zOgogIGFwcGVuZFBhZGRpbmc6IDgKICBzeW5jVmlld1BhZGRpbmc6IHRydWUKICB0b29sdGlwOgogICAgc2hhcmVkOiB0cnVlCiAgICBzaG93TWFya2VyczogZmFsc2UKICAgIHNob3dDcm9zc2hhaXJzOiB0cnVlCiAgICBvZmZzZXRZOiAtNTAKCm9wdGlvbnMuYXJlYToKICBheGVzOiB7fQogIG1ldGE6CiAgICB0aW1lOgogICAgICB0eXBlOiAndGltZScKICAgICAgbWFzazogJ01NLUREJwogICAgICBuaWNlOiB0cnVlCiAgICAgIHRpY2tJbnRlcnZhbDogMTcyODAwMDAwCiAgICAgIHJhbmdlOiBbMCwgMV0KICAgIHRlbXBlcmF0dXJlOgogICAgICBuaWNlOiB0cnVlCiAgICAgIHN5bmM6IHRydWUKICAgICAgYWxpYXM6ICfmuKnluqbojIPlm7QnCiAgZ2VvbWV0cmllczoKICAgIC0gdHlwZTogJ2FyZWEnCiAgICAgIHhGaWVsZDogJ3RpbWUnCiAgICAgIHlGaWVsZDogJ3RlbXBlcmF0dXJlJwogICAgICBtYXBwaW5nOiB7fQoKb3B0aW9ucy5saW5lOgogIGF4ZXM6IGZhbHNlCiAgbWV0YToKICAgIHRpbWU6CiAgICAgIHR5cGU6ICd0aW1lJwogICAgICBtYXNrOiAnTU0tREQnCiAgICAgIG5pY2U6IHRydWUKICAgICAgdGlja0ludGVydmFsOiAxNzI4MDAwMDAKICAgICAgcmFuZ2U6IFswLCAxXQogICAgdGVtcGVyYXR1cmU6CiAgICAgIHN5bmM6ICd0ZW1wZXJhdHVyZScKICAgICAgYWxpYXM6ICfmuKnluqYnCiAgZ2VvbWV0cmllczoKICAgIC0gdHlwZTogJ2xpbmUnCiAgICAgIHhGaWVsZDogJ3RpbWUnCiAgICAgIHlGaWVsZDogJ3RlbXBlcmF0dXJlJwogICAgICBtYXBwaW5nOiB7fQogICAgLSB0eXBlOiAncG9pbnQnCiAgICAgIHhGaWVsZDogJ3RpbWUnCiAgICAgIHlGaWVsZDogJ3RlbXBlcmF0dXJlJwogICAgICBtYXBwaW5nOgogICAgICAgIHNoYXBlOiAnY2lyY2xlJwogICAgICAgIHN0eWxlOgogICAgICAgICAgZmlsbE9wYWNpdHk6IDEKYGBg",
    OrganizationTreeGraph = "YGBgY2hhcnRzdmlldwojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IHR5cGUgICAgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwp0eXBlOiBPcmdhbml6YXRpb25UcmVlR3JhcGgKCiMtLS0tLS0tLS0tLS0tLS0tLSMKIy0gY2hhcnQgZGF0YSAgICAtIwojLS0tLS0tLS0tLS0tLS0tLS0jCmRhdGE6CiAgaWQ6ICJyb290IgogIGxhYmVsOiAiUm9vdCIKICBjaGlsZHJlbjoKICAgIC0gaWQ6ICJjMSIKICAgICAgbGFiZWw6ICJDMSIKICAgICAgY2hpbGRyZW46CiAgICAgICAgLSBpZDogImMxLTEiCiAgICAgICAgICBsYWJlbDogIkMxLTEiCiAgICAgICAgICBjaGlsZHJlbjoKICAgICAgICAgICAgLSBpZDogImMxLTEtMSIKICAgICAgICAgICAgICBsYWJlbDogIkMxLTEtMSIKICAgICAgICAgICAgLSBpZDogImMxLTEtMiIKICAgICAgICAgICAgICBsYWJlbDogIkMxLTEtMiIKICAgICAgICAtIGlkOiAiYzEtMiIKICAgICAgICAgIGxhYmVsOiAiQzEtMiIKICAgICAgICAgIGNoaWxkcmVuOgogICAgICAgICAgICAtIGlkOiAiYzEtMi0xIgogICAgICAgICAgICAgIGxhYmVsOiAiQzEtMi0xIgogICAgICAgICAgICAtIGlkOiAiYzEtMi0yIgogICAgICAgICAgICAgIGxhYmVsOiAiQzEtMi0yIgogICAgLSBpZDogImMyIgogICAgICBsYWJlbDogIkMyIgogICAgICBjaGlsZHJlbjoKICAgICAgICAtIGlkOiAiYzItMSIKICAgICAgICAgIGxhYmVsOiAiQzItMSIKICAgICAgICAgIGNoaWxkcmVuOgogICAgICAgICAgICAtIGlkOiAiYzItMS0xIgogICAgICAgICAgICAgIGxhYmVsOiAiQzItMS0xIgoKIy0tLS0tLS0tLS0tLS0tLS0tIwojLSBjaGFydCBvcHRpb25zIC0jCiMtLS0tLS0tLS0tLS0tLS0tLSMKb3B0aW9uczoge30KYGBg",
    Radar = "YGBgY2hhcnRzdmlldwojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IHR5cGUgICAgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwp0eXBlOiBSYWRhcgoKIy0tLS0tLS0tLS0tLS0tLS0tIwojLSBjaGFydCBkYXRhICAgIC0jCiMtLS0tLS0tLS0tLS0tLS0tLSMKZGF0YToKICAtIGl0ZW06ICJEZXNpZ24iCiAgICB1c2VyOiAiYSIKICAgIHNjb3JlOiA3MAogIC0gaXRlbTogIkRlc2lnbiIKICAgIHVzZXI6ICJiIgogICAgc2NvcmU6IDMwCiAgLSBpdGVtOiAiTWFya2V0aW5nIgogICAgdXNlcjogImEiCiAgICBzY29yZTogNTAKICAtIGl0ZW06ICJNYXJrZXRpbmciCiAgICB1c2VyOiAiYiIKICAgIHNjb3JlOiA2MAogIC0gaXRlbTogIlRlY2hub2xvZ3kiCiAgICB1c2VyOiAiYSIKICAgIHNjb3JlOiA1MAogIC0gaXRlbTogIlRlY2hub2xvZ3kiCiAgICB1c2VyOiAiYiIKICAgIHNjb3JlOiA0MAogIC0gaXRlbTogIlN1cHBvcnQiCiAgICB1c2VyOiAiYSIKICAgIHNjb3JlOiAzMAogIC0gaXRlbTogIlN1cHBvcnQiCiAgICB1c2VyOiAiYiIKICAgIHNjb3JlOiA0MAogIC0gaXRlbTogIlNhbGVzIgogICAgdXNlcjogImEiCiAgICBzY29yZTogNjAKICAtIGl0ZW06ICJTYWxlcyIKICAgIHVzZXI6ICJiIgogICAgc2NvcmU6IDQwCgojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IG9wdGlvbnMgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwpvcHRpb25zOgogIHhGaWVsZDogIml0ZW0iCiAgeUZpZWxkOiAic2NvcmUiCiAgc2VyaWVzRmllbGQ6ICJ1c2VyIgogIG1ldGE6CiAgICBzY29yZToKICAgICAgYWxpYXM6ICJTY29yZSIKICAgICAgbWluOiAwCiAgICAgIG5pY2U6IHRydWUKICB4QXhpczoKICAgIGxpbmU6IG51bGwKICAgIHRpY2tMaW5lOiBudWxsCiAgeUF4aXM6CiAgICBsYWJlbDogZmFsc2UKICAgIGdyaWQ6CiAgICAgIGFsdGVybmF0ZUNvbG9yOiAicmdiYSgwLCAwLCAwLCAwLjA0KSIKICBwb2ludDoge30KICBhcmVhOiB7fQpgYGA=",
    TinyLine = "YGBgY2hhcnRzdmlldwojLS0tLS0tLS0tLS0tLS0tLS0jCiMtIGNoYXJ0IHR5cGUgICAgLSMKIy0tLS0tLS0tLS0tLS0tLS0tIwp0eXBlOiBUaW55TGluZQoKIy0tLS0tLS0tLS0tLS0tLS0tIwojLSBjaGFydCBkYXRhICAgIC0jCiMtLS0tLS0tLS0tLS0tLS0tLSMKZGF0YTogWzI2NCwgNDE3LCA0MzgsIDg4NywgMzA5LCAzOTcsIDU1MCwgNTc1LCA1NjMsIDQzMCwgNTI1LCA1OTIsIDQ5MiwgNDY3LCA1MTMsIDU0NiwgOTgzLCAzNDAsIDUzOSwgMjQzLCAyMjYsIDE5Ml0KCiMtLS0tLS0tLS0tLS0tLS0tLSMKIy0gY2hhcnQgb3B0aW9ucyAtIwojLS0tLS0tLS0tLS0tLS0tLS0jCm9wdGlvbnM6CiAgaGVpZ2h0OiA2MAogIGF1dG9GaXQ6IGZhbHNlCiAgc21vb3RoOiB0cnVlCiAgdG9vbHRpcDogZmFsc2UKICBhbm5vdGF0aW9uczoKICAgIC0gdHlwZTogImxpbmUiCiAgICAgIHN0YXJ0OiBbIm1pbiIsICJtZWFuIl0KICAgICAgZW5kOiBbIm1heCIsICJtZWFuIl0KICAgICAgc3R5bGU6CiAgICAgICAgc3Ryb2tlOiAicmdiYSgwLCAwLCAwLCAwLjQ1KSIKICAgICAgdGV4dDoKICAgICAgICBjb250ZW50OiAiQXZlcmFnZSIKICAgICAgICBvZmZzZXRZOiAtMgogICAgICAgIHN0eWxlOgogICAgICAgICAgdGV4dEFsaWduOiAibGVmdCIKICAgICAgICAgIGZvbnRTaXplOiAxMAogICAgICAgICAgZmlsbDogInJnYmEoNDQsIDUzLCA2NiwgMC40NSkiCiAgICAgICAgICB0ZXh0QmFzZWxpbmU6ICJib3R0b20iCiAgICAtIHR5cGU6ICJsaW5lIgogICAgICBzdGFydDogWyJtaW4iLCA4MDBdCiAgICAgIGVuZDogWyJtYXgiLCA4MDBdCiAgICAgIHN0eWxlOgogICAgICAgIHN0cm9rZTogInJnYmEoMjAwLCAwLCAwLCAwLjU1KSIKICAgICAgdGV4dDoKICAgICAgICBjb250ZW50OiAiVGFyZ2V0IgogICAgICAgIG9mZnNldFk6IC0yCiAgICAgICAgc3R5bGU6CiAgICAgICAgICB0ZXh0QWxpZ246ICJsZWZ0IgogICAgICAgICAgZm9udFNpemU6IDEwCiAgICAgICAgICBmaWxsOiAicmdiYSg0NCwgNTMsIDY2LCAwLjQ1KSIKICAgICAgICAgIHRleHRCYXNlbGluZTogImJvdHRvbSIKYGBg",
};