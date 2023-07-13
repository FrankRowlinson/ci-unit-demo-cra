---
title: RELEASE {{ env.GITHUB_REF_NAME }}
labels: release
---

Author: {{ env.GITHUB_ACTOR }}
Version: {{ env.GITHUB_REF_NAME }}

This is a test issue for release.
Test results: {{ env.TEST_RESULTS }}
