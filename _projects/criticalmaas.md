---
layout: page
title: CriticalMAAS – AI for Geological Map Geolocation & Feature Extraction
description: DARPA/USGS project on automated georeferencing and feature extraction for critical mineral assessment
img:
importance: 1
category: work
related_publications: false
---

**Sponsor:** U.S. Geological Survey / DARPA  
**Performer:** InferLink Corporation, University of Minnesota, University of South California
**Award ID:** 140D0423C0093  
**Period:** 2023 -- 2025  
**Status:** completed  

## Overview

Critical minerals are essential to modern technologies and the global economy. Geological maps contain valuable information about formations, faults, mineral deposits, and other subsurface indicators, but most exist only as scanned images that require time-consuming manual digitization.  

CriticalMAAS aims to develop an automated pipeline to convert geological maps into analyzable digital layers, enabling large-scale mineral assessment. The project develops **AI-driven map geolocation, coordinate system inference, and feature extraction** methods, culminating in **AIM (AI for Maps)** — an end-to-end prototype system for automated processing of geological map imagery.

## Research Contributions

- **Automated map georeferencing:** Detecting map location, coordinate systems, and spatial alignment for maps without known geolocation
- **Geological feature extraction:** Detecting and digitizing point, line, and polygon features such as mineral deposits, formations, faults, folds, and contacts
- **Legend-aware feature interpretation:** Incorporating cartographic symbology and domain heuristics to improve recognition accuracy on diverse map styles
- **Benchmark dataset development:** Creating labeled geological map datasets to support evaluation and training
- **Scalable processing system:** Implementing a high-volume pipeline for real-world government and commercial use cases

## Technical Approach

Building on models developed for the DARPA/USGS **AI for Critical Mineral Assessment Competition (2022)**, the project extends machine learning methods for robust map processing. The work introduces:

1. **Accurate feature extraction from diverse map styles**  
   Enhancing previous detection frameworks and integrating cartographic reasoning to improve generalization across geological symbologies.

2. **Automated georeferencing at scale**  
   Algorithms for identifying geographic location, coordinate reference, and map orientation without manual intervention.

3. **Scalable end-to-end system (AIM)**  
   A processing engine capable of handling large volumes of historical and modern geological map scans.

Challenges addressed include limited annotated training data, imbalanced feature distributions, and domain shift across heterogeneous map sources.

## Impact

The outcome of CriticalMAAS reduced the need for manual map digitization and enabled rapid mineral assessment at national scale. AIM automates data extraction workflows, generating structured spatial layers useful for:

- critical mineral exploration
- geological surveying and resource assessment
- environmental and land-use analysis
- government and commercial decision-making

The system supports future integration with large-scale geological repositories, accelerating research and national resource planning.
