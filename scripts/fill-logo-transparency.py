#!/usr/bin/env python3
"""
Remove white background from a PNG using color-to-alpha.
Handles flat fills and anti-aliased edges alike.

Usage:
    python3 scripts/fill-logo-transparency.py [path/to/image.png]
Defaults to: public/images/logo-nn-transparent.png
"""
import sys
from pathlib import Path
import numpy as np
from PIL import Image


def color_to_alpha(src: Path, bg: tuple[int, int, int] = (255, 255, 255)) -> None:
    img = Image.open(src).convert("RGBA")
    data = np.array(img, dtype=float)

    bg_f = np.array(bg, dtype=float)
    rgb = data[..., :3]

    # Alpha = max channel distance from background colour, normalised to [0, 1].
    # Pure white → 0 (fully transparent). Pure dark → ~1. Anti-aliased grays → fractional.
    dist = np.abs(rgb - bg_f)
    alpha = dist.max(axis=-1) / 255.0  # shape (H, W)

    # Recover the true foreground colour by reversing the compositing equation:
    #   pixel = fg * alpha + bg * (1 - alpha)  →  fg = (pixel - bg*(1-alpha)) / alpha
    safe = np.where(alpha[..., None] > 0, alpha[..., None], 1.0)
    rgb_out = (rgb - bg_f * (1.0 - alpha[..., None])) / safe
    rgb_out = np.clip(rgb_out, 0, 255)

    out = np.zeros_like(data)
    out[..., :3] = rgb_out
    out[..., 3] = alpha * 255

    Image.fromarray(out.astype(np.uint8)).save(src)
    cleared = int((alpha < 0.01).sum())
    print(f"Done. {cleared:,} pixels made fully transparent → {src}")


if __name__ == "__main__":
    target = (
        Path(sys.argv[1])
        if len(sys.argv) > 1
        else Path("public/images/logo-nn-transparent.png")
    )
    color_to_alpha(target)
