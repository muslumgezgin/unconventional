---
---

{% include distinct/countries.liquid %}
{% include distinct/speakers.liquid %}

{% assign most_speakers = "" | split: "" %}

{% assign most_speakers_max = 0 %}{% for speaker in speakers %}{% assign speaker_size = speaker | size %}{% if speaker_size > most_speakers_max %}{% assign most_speakers_max = speaker_size %}{% assign most_speakers_max_index = forloop.index0 %}{% endif %}{% endfor %}

{{ most_speakers_max}} {{most_speakers_max_index}}