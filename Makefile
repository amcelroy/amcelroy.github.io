wasm:
	cd dotstar-rs && wasm-pack build --out-dir ../src/routes/raptura/pkg  --features wasm

# The Game of Life engine deliberately does NOT live in this repo -- it is the
# same crate the ESP32-S3 firmware runs, so a copy here would drift from the
# physical piece. The generated pkg/ is committed, so a normal site build needs
# nothing extra; only regenerating it needs the firmware repo checked out.
GOL_REPO ?= ../game_of_life

gol:
	cd $(GOL_REPO)/gol && wasm-pack build wasm \
		--out-dir $(CURDIR)/src/routes/gol/pkg --out-name gol
	# wasm-pack drops a `.gitignore` containing `*` into pkg/. The generated
	# output is meant to be committed here so the site builds without the
	# firmware repo present, so remove it.
	rm -f src/routes/gol/pkg/.gitignore
