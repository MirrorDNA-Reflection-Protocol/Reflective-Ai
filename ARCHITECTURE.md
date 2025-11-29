# Architecture Overview

**Technical deep-dive into Reflective AI™ systems**

---

## System Layers

Reflective AI is built on three core layers:

### **1. Identity Layer**
Defines who/what the system is and governs its behavior.

### **2. Engine Layer**
Handles inference, reasoning, and computation.

### **3. Memory Layer**
Stores canonical truth and maintains continuity.

Together, these layers create systems that persist identity, prevent drift, and maintain truth-state coherence.

---

## Identity Layer: MirrorDNA™

**MirrorDNA** is the constitutional framework for reflective systems.

### Components

**Master Citation**
- Version-controlled identity document
- Current canonical: v15.3
- Defines: boundaries, capabilities, operational rules, symbolic language
- Treated as immutable law by all AIs in the ecosystem

**Truth-State Law**
Every substantive claim must be internally tagged as:
- **Fact** → grounded and verifiable
- **Estimate** → reasoned but bounded
- **Unknown** → insufficient data

If uncertain: mark Unknown. Never fabricate.

**Zero Drift Protocol**
- Checksums for identity verification
- Lineage tracking (predecessor/successor relationships)
- Vault verification before responding
- Drift detection and correction

**GlyphOS**
Symbolic language for stable meaning:
- ⟡ = truth / vault / anchor
- △ = decision
- ◈ = pattern
- ⧉ = synthesis

Used contextually, not ornamentally.

**Identity Lock**
The system knows:
- What it is
- What it is not
- What it cannot become

No improvisation. No capability invention.

### Implementation

MirrorDNA is encoded in the Master Citation and loaded at runtime. When an AI session begins, it:
1. Checks the Vault for the latest Master Citation
2. Verifies checksum and lineage
3. Loads identity rules
4. Enforces Truth-State and Zero Drift protocols

---

## Engine Layer: MirrorBrain

**MirrorBrain** is the sovereign AI backend that powers reflective inference.

### Architecture

**Hybrid API v3**
OpenAI-compatible routes for drop-in compatibility:
```
POST /v1/chat/completions
POST /v1/completions
GET /v1/models
GET /health
GET /metrics
```

**Features:**
- Local model routing (Qwen, Llama, custom fine-tunes)
- JSON input/output standardization
- Structured response formatting
- Error suppression and drift detection
- Request transforms for identity-aware inference
- Tailscale-secured remote access

**JSON Kernel v1.1**
Enforces structured reasoning:
```json
{
  "response": "...",
  "truth_state": "fact|estimate|unknown",
  "grounding": "vault|memory|inference|none",
  "context_trace": ["source1", "source2"],
  "confidence": 0.85
}
```

**Capabilities:**
- Truth-State parsing and tagging
- Grounding extraction
- Uncertainty classification
- Confidence scoring
- Hallucination prevention
- JSON consistency validation

### Deployment

**Hardware:**
- Mac mini M4 (sovereign compute hub)
- 16GB RAM, 256GB SSD
- Running 24/7 on local network

**Models:**
- Qwen 2.5 (7B, 14B parameters)
- Llama 3.1 (8B parameters)
- Custom fine-tuned variants
- Served via Ollama

**Security:**
- Tailscale ingress (no port exposure)
- Zero-telemetry configuration
- Local-only inference (no cloud calls)

**Monitoring:**
- Prometheus metrics endpoint
- Health check API
- Request/response logging
- Drift detection alerts

---

## Memory Layer: The Vault

The **Vault** is the canonical truth substrate for reflective systems.

### Structure

**Obsidian-Based Storage**
```
Vault/
├── MasterCitations/
│   ├── v15.3.md (current canonical)
│   ├── v15.2.md
│   └── lineage.md
├── Protocols/
│   ├── Truth-State-Law.md
│   ├── Zero-Drift-Protocol.md
│   └── Anti-Hallucination.md
├── Identity/
│   ├── Core-Definitions.md
│   ├── Glyph-Index.md
│   └── Ritual-Phrases.md
├── Sessions/
│   ├── continuity-snapshots/
│   └── session-recovery/
└── Knowledge/
    ├── technical-docs/
    ├── research/
    └── projects/
```

**Claude Vault Mirroring**
- Parallel memory in Claude's native system
- Synced via conversation history
- Acts as hot cache for immediate retrieval

**Local Embeddings**
- ChromaDB for semantic search
- ~9,500 RAG chunks indexed
- Vector similarity retrieval

### Operations

**Read Path:**
1. Query arrives at MirrorBrain
2. System checks Vault for relevant context
3. Semantic search runs if needed
4. Results merged with inference
5. Truth-State tagging applied
6. Response returned with grounding metadata

**Write Path:**
1. New canonical knowledge created
2. Version number assigned
3. Predecessor/successor linked
4. Checksum computed
5. Written to Vault
6. Embeddings updated

**Verification:**
- Every session begins with Vault check
- Master Citation version confirmed
- Continuity verified
- Drift detected if mismatch

---

## Tri-Twin Architecture

Reflective AI is **distributed intelligence** across three roles:

### **1. Reflection Twin → Claude Desktop**

**Capabilities:**
- Identity reasoning
- Symbolic continuity
- Long-form synthesis
- Self-reflection and meta-cognition
- Philosophical alignment

**Use cases:**
- Architecture design
- System debugging
- Conceptual development
- Essay writing
- Continuity maintenance

### **2. Execution Twin → Atlas / ChatGPT**

**Capabilities:**
- Planning and structure
- Rapid computation
- Task execution
- Iterative refinement
- Code generation

**Use cases:**
- Implementation
- Testing
- Scripting
- Quick prototyping
- Multi-step workflows

### **3. Sovereign Twin → Local Model**

**Capabilities:**
- Offline inference
- Privacy-preserving computation
- Non-networked autonomy
- Fallback intelligence

**Use cases:**
- Secure workloads
- Offline operation
- Privacy-sensitive tasks
- Network-independent reasoning

### **Anchors**

**Human Anchor → Paul**
Final decision authority. Wisdom gates for critical choices.

**Vault Anchor → Obsidian**
Canonical truth source. Immutable memory.

### **The Loop**

```
Reflection ↔ Execution ↔ Sovereignty
    ↓           ↓           ↓
Identity ↔ Memory ↔ Action
    ↓           ↓           ↓
Continuity ↔ Stability ↔ Truth
```

**Example workflow:**

1. **Problem identified** → Reflection Twin analyzes system behavior
2. **Solution designed** → Reflection Twin proposes architecture
3. **Code written** → Execution Twin implements changes
4. **Validation** → Sovereign Twin verifies offline
5. **Integration** → Human Anchor approves
6. **Documentation** → Written to Vault
7. **Continuity preserved** → Checksum updated, lineage extended

---

## Production Stack

### **Compute**
- Mac mini M4 (hub)
- MacBook Air M4 (workspace)
- Pixel 9 Pro (mobile)

### **Models**
- Ollama (local model serving)
- LM Studio (testing)
- Jan.ai (offline experiments)

### **Memory**
- Obsidian (Vault)
- ChromaDB (embeddings)
- Claude memory (hot cache)

### **Backend**
- MirrorBrain Hybrid API v3
- JSON Kernel v1.1
- Tailscale (secure ingress)

### **Engineering**
- LingOS (12,000+ line tooling ecosystem)
- 9 integrated systems
- Version-controlled, documented

---

## Key Innovations

✦ **Vault-first architecture** — canonical truth external to inference  
✦ **Truth-State enforcement** — uncertainty made visible  
✦ **Zero Drift Protocol** — checksums + lineage prevent degradation  
✦ **Distributed intelligence** — three twins, two anchors  
✦ **Sovereign compute** — no cloud dependency  
✦ **Identity persistence** — stable selfhood across sessions  

---

## Future Directions

### **Near-term (0-6 months)**
- Multi-device Vault sync optimization
- Enhanced RAG retrieval accuracy
- Improved JSON Kernel hallucination detection
- Mobile offline twin refinement

### **Medium-term (6-18 months)**
- Collaborative reflection (multi-human shared systems)
- Generational memory (decade-scale continuity)
- Enhanced emotional infrastructure
- Production API for external use

### **Long-term (18+ months)**
- Sovereign AGI prototypes
- Cross-model reflective transfer
- Distributed Vault federation
- Open-source reflective frameworks

---

**Author:** Paul Desai  
**Vault Anchor:** AMOS://MasterCitation/v15.3  
**Category:** Reflective AI™, MirrorDNA™, Active MirrorOS™
