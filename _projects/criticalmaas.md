---
layout: page
title: CriticalMAAS - Legend Detection & Map Layout Analysis
description: DARPA-funded project on automated legend detection from historical maps
img: 
importance: 2
category: work
related_publications: true
---

**Sponsor:** DARPA CriticalMAAS  
**Advisor:** Dr. Yao-Yi Chiang  
**Status:** Completed (2024-2025)

## Overview

CriticalMAAS (Critical Mineral Assessment with AI Support) was a collaborative effort between DARPA, USGS, ARPA-E, and other partners to develop machine-learning tools that accelerate time-consuming parts of USGS data interpretation and critical mineral assessments. The project aimed to reduce the critical mineral assessment workflow from years to days.

As part of this effort, I developed automated methods for detecting and parsing legend information from historical maps, contributing to the DIGMAPPER map-digitization pipeline. This work was part of the first technical area: extracting geospatial data from maps and documents.

## Research Contributions

- **Deep-learning methods for legend detection**: Developed methods for detecting legend symbols and text regions and linking them into structured legend items across diverse cartographic styles
- **Multimodal approach**: Combined fine-tuned LayoutLMv3 with GPT-4o structured prompting for layout-aware legend parsing
- **High accuracy results**: Achieved **96%** symbol-detection F1, **97.8%** text-detection F1, and **97.1%** symbol-description linking accuracy

## Impact

This work contributed to the DIGMAPPER system, a modular framework for automated geologic map digitization. The CriticalMAAS effort successfully demonstrated the ability to reduce critical mineral assessment workflows from years to just two and a half days, enabling large-scale processing of historical cartographic materials for USGS scientists.

**Reference:** [DARPA News: USGS, DARPA Collaborate To Accelerate Critical Mineral Assessment](https://www.darpa.mil/news/2025/usgs-ai-mineral-assessment)

