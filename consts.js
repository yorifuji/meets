"use strict";

const consts = {
  skyway: {
    mode: [
      { label: "P2P", value: "p2p" },
      { label: "MESH", value: "mesh" },
      { label: "SFU", value: "sfu" },
    ]
  },
  video: {
    codec: [
      { label: "default", value: null },
      { label: "VP8", value: "VP8" },
      { label: "VP9", value: "VP9" },
      { label: "H.264", value: "H264" },
    ],
    size: [
      { label: "3840 x 2160", value: { width: 3840, height: 2160 } },
      { label: "1920 x 1080", value: { width: 1920, height: 1080 } },
      { label: "1280 x 720", value: { width: 1280, height: 720 } },
      { label: " 640 x 480", value: { width: 640, height: 480 } },
    ],
    fps: [
      { label: "60 fps", value: 60 },
      { label: "30 fps", value: 30 },
      { label: "15 fps", value: 15 },
    ],
    bandwidth: [
      { label: "default", value: null },
      { label: "4096 kbps", value: 4096 },
      { label: "2048 kbps", value: 2048 },
      { label: "1024 kbps", value: 1024 },
      { label: "512 kbps", value: 512 },
      { label: "256 kbps", value: 256 },
      { label: "128 kbps", value: 128 },
    ],
  },
  audio: {
    codec: [
      { label: "default", value: null },
      { label: "Opus", value: "opus" },
      { label: "iSAC", value: "ISAC" },
      { label: "G.722", value: "G722" },
      { label: "PCMU(G.711 u-law)", value: "PCMU" },
      { label: "PCMA(G.711 a-law)", value: "PCMA" }
    ],
    bandwidth: [
      { label: "default", value: null },
      { label: "128 kbps", value: 128 },
      { label: "64 kbps", value: 64 },
      { label: "32 kbps", value: 32 },
      { label: "16 kbps", value: 16 },
      { label: "8 kbps", value: 8 },
    ],
  },
  speaker: {
    volume: [
      { label: "1.0", value: 1.0 },
      { label: "0.9", value: 0.9 },
      { label: "0.8", value: 0.8 },
      { label: "0.7", value: 0.7 },
      { label: "0.6", value: 0.6 },
      { label: "0.5", value: 0.5 },
      { label: "0.4", value: 0.4 },
      { label: "0.3", value: 0.3 },
      { label: "0.2", value: 0.2 },
      { label: "0.1", value: 0.1 }
    ]
  },
  renderer: [
    { label: "Cover", value: "cover" },
    { label: "Normal", value: "normal" },
  ],
  layout: [
    { label: "Auto", value: "auto" },
    { label: "PinP", value: "pinp" },
    { label: "Grid", value: "grid" },
  ]
}

// done
