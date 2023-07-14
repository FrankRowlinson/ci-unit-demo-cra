---
title: RELEASE {{ env.GITHUB_REF_NAME }}
labels: release
---

Author: {{ env.GITHUB_ACTOR }}
Version: {{ env.GITHUB_REF_NAME }}

{{ env.CHANGELOG }}

Test results: {{ env.TEST_RESULTS }}
