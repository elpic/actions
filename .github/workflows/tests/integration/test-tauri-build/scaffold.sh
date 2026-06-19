#!/usr/bin/env bash
set -euo pipefail

FIXTURE="${1:-.test-fixtures/tauri-build}"

rm -rf "$FIXTURE"
mkdir -p "$FIXTURE/src"
mkdir -p "$FIXTURE/src-tauri/src"
mkdir -p "$FIXTURE/dist"

# package.json
cat > "$FIXTURE/package.json" << 'EOF'
{
  "name": "test-tauri-app",
  "private": true,
  "scripts": {
    "build": "echo frontend built > dist/index.html"
  },
  "devDependencies": {
    "typescript": "^5.0.0"
  }
}
EOF

# tsconfig.json
cat > "$FIXTURE/tsconfig.json" << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true
  }
}
EOF

# TypeScript source
cat > "$FIXTURE/src/index.ts" << 'EOF'
const greeting: string = "hello from Tauri test";
console.log(greeting);
EOF

# Cargo.toml
cat > "$FIXTURE/src-tauri/Cargo.toml" << 'EOF'
[package]
name = "test-tauri-app"
version = "0.1.0"
edition = "2021"

[dependencies]
tauri = { version = "2", features = [] }

[build-dependencies]
tauri-build = { version = "2", features = [] }
EOF

# build.rs
cat > "$FIXTURE/src-tauri/build.rs" << 'EOF'
fn main() {
    tauri_build::build()
}
EOF

# main.rs
cat > "$FIXTURE/src-tauri/src/main.rs" << 'EOF'
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    println!("Tauri app stub — build test passed");
}

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
EOF

# tauri.conf.json
cat > "$FIXTURE/src-tauri/tauri.conf.json" << 'EOF'
{
  "productName": "test-tauri-app",
  "version": "0.1.0",
  "identifier": "com.test.tauri.app",
  "build": {
    "frontendDist": "../dist"
  },
  "app": {
    "windows": []
  }
}
EOF

# Generate lockfile
cd "$FIXTURE"
npm install --package-lock-only --silent 2>/dev/null
cd "$OLDPWD"

echo "✅ Fixture created at $FIXTURE"
