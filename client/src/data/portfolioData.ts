export interface ProjectMedia {
  type: "video" | "image";
  url: string;
  title: string;
  caption: string;
}

export interface ProjectItem {
  slug: string;
  title: string;
  category: "unreal" | "tools" | "combat";
  engine: string;
  type: string;
  award?: string;
  description: string;
  role: string;
  period: string;
  thumbnail: string;
  video?: string;
  tags: string[];
  systems: string[];
  overview: {
    genre: string;
    platform: string;
    engineVersion: string;
    teamSize: string;
    summary: string;
  };
  contributions: string[];
  technicalBreakdown: {
    architecture: string;
    challenges: string;
    codeSnippetTitle: string;
    codeLanguage: string;
    codeSnippet: string;
  };
  metrics: { label: string; value: string }[];
  gallery: ProjectMedia[];
  links: {
    github?: string;
    build?: string;
    playableEmbed?: boolean;
    note?: string;
  };
}

export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  return `${cleanBase}${cleanPath}`;
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: "e2e-automation-suite",
    title: "Headless E2E Automation Suite",
    category: "tools",
    engine: "Unreal Engine 5.7",
    type: "Cyrus 365 / UE 5.7 Systems Internship",
    description: "A project-agnostic Unreal Engine C++ harness for headless test flows, recursive Slate/UMG discovery, physics determinism, replication checks, and GPU backbuffer streaming.",
    role: "Unreal Engine Developer & Tools Programmer at Cyrus 365",
    period: "Jan 2026 — Present",
    thumbnail: assetUrl("portfolio_media/screenshots/e2e_plugin/00_ue5_editor_e2e_suite_panel.png"),
    video: assetUrl("videos/02_e2e_automation_suite.mp4"),
    tags: ["Unreal Engine 5.7", "C++", "Win32", "FFmpeg"],
    systems: [
      "Win32 Desktop Sandboxing: Instantiates winsta0\\E2E_IsolatedDesktop, injecting hardware mouse/keyboard events without stealing OS cursor focus or user interruption.",
      "Slate & UMG Auto-Discovery: Recursively navigates runtime Slate widget trees via reflection, synthesizing click/drag events and validating UI state changes dynamically.",
      "GPU Backbuffer Video Streaming: Pipes raw frames directly from FViewport::ReadPixels to bundled FFmpeg via standard input (stdin), encoding 1080p H.264 recordings with automated pass/fail incident markers.",
      "Headless Multi-Instance CI Commandlet: Orchestrates dedicated server runs with 90-second deterministic state guards, validating networked replication and physics determinism in CI/CD pipelines."
    ],
    overview: {
      genre: "Engine Tools & Automated Testing Framework",
      platform: "Windows (Win32 / UE5 Native Editor Plugin)",
      engineVersion: "Unreal Engine 5.7 (C++)",
      teamSize: "Engineering Intern (Cyrus 365 Tools Team)",
      summary: "A project-agnostic Unreal Engine C++ harness for headless test flows, recursive Slate/UMG discovery, physics determinism, replication checks, and GPU backbuffer streaming."
    },
    contributions: [
      "Win32 Desktop Sandboxing: Instantiates winsta0\\E2E_IsolatedDesktop, injecting hardware mouse/keyboard events without stealing OS cursor focus or user interruption.",
      "Slate & UMG Auto-Discovery: Recursively navigates runtime Slate widget trees via reflection, synthesizing click/drag events and validating UI state changes dynamically.",
      "GPU Backbuffer Video Streaming: Pipes raw frames directly from FViewport::ReadPixels to bundled FFmpeg via standard input (stdin), encoding 1080p H.264 recordings with automated pass/fail incident markers.",
      "Headless Multi-Instance CI Commandlet: Orchestrates dedicated server runs with 90-second deterministic state guards, validating networked replication and physics determinism in CI/CD pipelines."
    ],
    technicalBreakdown: {
      architecture: "The framework operates as an engine-level subsystem decoupled from game logic. Tests run on a dedicated Win32 desktop station created via CreateDesktopA('E2E_Desk'). Viewport rendering pumps into a ring buffer where frame pixels are dispatched to FFmpeg without GPU stalling.",
      challenges: "Capturing viewport frames at 60 FPS without blocking the main render thread required zero-copy buffer staging and asynchronous pipe writes to FFmpeg standard input.",
      codeSnippetTitle: "FE2ESandbox.cpp — Win32 Desktop Isolation & Backbuffer Pipe",
      codeLanguage: "cpp",
      codeSnippet: `// Win32 Desktop Isolation & GPU Backbuffer Pipe to FFmpeg
void FE2ESandbox::InitializeIsolatedDesktop() {
    // 1. Instantiate dedicated Win32 desktop for headless input isolation
    HDESK hDesk = CreateDesktopA(
        "E2E_IsolatedDesktop",
        nullptr, nullptr, 0,
        GENERIC_ALL, nullptr
    );
    if (!hDesk) {
        UE_LOG(LogE2E, Error, TEXT("Failed to allocate isolated Win32 desktop."));
        return;
    }
    SetThreadDesktop(hDesk);

    // 2. Stream backbuffer frames directly to FFmpeg stdin worker
    if (GEngine && GEngine->GameViewport && GEngine->GameViewport->Viewport) {
        FViewport* Viewport = GEngine->GameViewport->Viewport;
        PipeBackbufferToFFmpeg(Viewport, "E2E_Artifact_1080p.mp4");
    }
}

void FE2ESandbox::PipeBackbufferToFFmpeg(FViewport* InViewport, const FString& OutPath) {
    TArray<FColor> RawPixels;
    if (InViewport->ReadPixels(RawPixels, FReadSurfaceDataFlags(), FIntRect())) {
        // Asynchronous pipe write to FFmpeg standard input
        FFmpegProcessHandle.Write(
            reinterpret_cast<const uint8*>(RawPixels.GetData()),
            RawPixels.Num() * sizeof(FColor)
        );
    }
}`
    },
    metrics: [
      { label: "OS Focus Theft", value: "0% (Zero Theft)" },
      { label: "Stream Quality", value: "1080p60 H.264" },
      { label: "Engine Target", value: "UE 5.7 C++" },
      { label: "Test Determinism", value: "100% Authoritative" }
    ],
    gallery: [
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/e2e_plugin/00_ue5_editor_e2e_suite_panel.png"),
        title: "Slate Test Runner Panel",
        caption: "Recursive Slate/UMG widget tree inspection with dynamic runtime state validation"
      },
      {
        type: "video",
        url: assetUrl("videos/02_e2e_automation_suite.mp4"),
        title: "E2E Automation Harness Reel",
        caption: "Automated test runner executing procedural assembly and UI validation flows"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/e2e_plugin/00_ue5_editor_e2e_suite_workspace.png"),
        title: "UE5 Editor Automation Scene",
        caption: "Central test orchestration harness running live inside an active Unreal Engine 5.7 viewport"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/e2e_plugin/00_ue5_editor_e2e_progress_window.png"),
        title: "Live Execution Step Tree",
        caption: "Real-time automated step verification with deterministic timing markers"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/e2e_plugin/11_e2e_simulation_game_launch.png"),
        title: "Procedural Assembly Verification",
        caption: "Automated physics and procedural component placement test flow"
      }
    ],
    links: {
      note: "Commercial codebase under Cyrus 365 proprietary license. Architecture diagrams and workflow documentation available upon request."
    }
  },
  {
    slug: "the-interlude",
    title: "The Interlude",
    category: "unreal",
    engine: "Unreal Engine 4",
    type: "1st place / CodeDay 2.0",
    award: "1st Place Winner — CodeDay 2.0",
    description: "A 6-DOF zero-gravity flight simulator built in 24 hours, with predictive lead-target AI, escalating interceptors, and visceral space-combat feel.",
    role: "Solo Lead Gameplay & Combat Developer (24-Hour Competitive Sprint)",
    period: "24-Hour Hackathon",
    thumbnail: assetUrl("portfolio_media/screenshots/the_interlude/interlude_maxres_thumbnail.jpg"),
    video: assetUrl("videos/01_the_interlude.mp4"),
    tags: ["Unreal Engine 4", "Physics", "AI"],
    systems: [
      "6-DOF Zero-Gravity Physics: Responsive thruster inertia, pitch/yaw/roll torque dampening, and velocity vector alignment in zero gravity.",
      "Predictive Lead-Target AI: State-machine enemy AI calculating velocity vectors, lead-intercept angles, and evasive rolls.",
      "Visceral Combat Feedback: Procedural camera shake, laser collision particle trails via Niagara, and spatial 3D audio.",
      "Escalating Wave Director: Dynamic difficulty balancing managing enemy squad spawns and capital cruiser encounters."
    ],
    overview: {
      genre: "6-DOF Zero-Gravity Space Dogfight Simulator",
      platform: "PC / Windows",
      engineVersion: "Unreal Engine 4 (C++ & Blueprints)",
      teamSize: "Solo Developer",
      summary: "A 6-DOF zero-gravity flight simulator built in 24 hours, with predictive lead-target AI, escalating interceptors, and visceral space-combat feel."
    },
    contributions: [
      "6-DOF Zero-Gravity Physics: Responsive thruster inertia, pitch/yaw/roll torque dampening, and velocity vector alignment in zero gravity.",
      "Predictive Lead-Target AI: State-machine enemy AI calculating velocity vectors, lead-intercept angles, and evasive rolls.",
      "Visceral Combat Feedback: Procedural camera shake, laser collision particle trails via Niagara, and spatial 3D audio.",
      "Escalating Wave Director: Dynamic difficulty balancing managing enemy squad spawns and capital cruiser encounters."
    ],
    technicalBreakdown: {
      architecture: "The starfighter physics component calculates instantaneous angular torque and linear acceleration per tick with configurable dampening coefficients. Predictive AI evaluates target velocity vectors and solves quadratic intercept equations.",
      challenges: "Balancing authentic Newtonian inertia with responsive, arcade-like player control required dual-mode damping (flight-assist enabled vs assist-off drift mode).",
      codeSnippetTitle: "SpaceCombatComponent.cpp — Predictive Lead-Target Intercept Math",
      codeLanguage: "cpp",
      codeSnippet: `// Predictive Lead-Target Intercept Math
FVector USpaceCombatComponent::CalculateLeadTarget(
    const AActor* Target,
    float ProjectileSpeed,
    float DeltaTime
) {
    if (!Target) {
        return FVector::ZeroVector;
    }

    const FVector TargetLocation = Target->GetActorLocation();
    const FVector TargetVelocity = Target->GetVelocity();
    const FVector ShooterLocation = GetOwner()->GetActorLocation();

    // Compute direct Euclidean distance to target
    const float Distance = FVector::Dist(ShooterLocation, TargetLocation);
    const float SafeSpeed = FMath::Max(ProjectileSpeed, 100.0f);

    // First-order time-to-impact approximation
    const float TimeToImpact = Distance / SafeSpeed;

    // Linear lead compensation position vector
    const FVector LeadPosition = TargetLocation + (TargetVelocity * TimeToImpact);

    return LeadPosition;
}`
    },
    metrics: [
      { label: "Competition Honor", value: "1st Place Winner (CodeDay 2.0)" },
      { label: "Development Cycle", value: "24-Hour Competitive Sprint" },
      { label: "Physics Model", value: "6-DOF Newtonian Zero-G" },
      { label: "AI Architecture", value: "Predictive Vector Intercept" }
    ],
    gallery: [
      {
        type: "video",
        url: assetUrl("videos/01_the_interlude.mp4"),
        title: "The Interlude Gameplay Reel",
        caption: "6-DOF zero-gravity flight combat and predictive intercept AI dogfight footage"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/the_interlude/interlude_maxres_thumbnail.jpg"),
        title: "Interceptor Starfighter Key Art",
        caption: "Custom starfighter model with multi-directional thrusters and HUD targeting"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/the_interlude/action_captures/interlude_frame_01_00m05s.jpg"),
        title: "Zero-G Asteroid Field Navigation",
        caption: "Newtonian physics momentum with responsive pitch/yaw/roll torque dampening"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/the_interlude/action_captures/interlude_frame_02_00m11s.jpg"),
        title: "Predictive Lead-Target Intercept",
        caption: "State-machine enemy AI calculating velocity vectors and lead-intercept angles"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/the_interlude/action_captures/interlude_frame_03_00m19s.jpg"),
        title: "Evasive Slalom Maneuvers",
        caption: "High-G asteroid slalom testing dynamic physics collision boundaries"
      }
    ],
    links: {
      github: "https://github.com/KarthikVeeranala",
      note: "Project source and playable build available on GitHub profile."
    }
  },
  {
    slug: "byteoasis",
    title: "ByteOasis: Code to Escape",
    category: "unreal",
    engine: "Unreal Engine 4",
    type: "2nd place / HackRush 2.0",
    award: "2nd Place Winner — HackRush 2.0",
    description: "A first-person puzzle survival adventure where a stranded programmer repairs logic terminals, bypasses security grids, and executes commands across a cyber-archipelago.",
    role: "Lead Gameplay Developer & Puzzle Mechanics Designer (48-Hour Hackathon)",
    period: "48-Hour Hackathon",
    thumbnail: assetUrl("portfolio_media/screenshots/byte_oasis/byte_oasis_maxres_thumbnail.jpg"),
    video: assetUrl("videos/03_byte_oasis.mp4"),
    tags: ["Unreal Engine", "Puzzle", "Terminals"],
    systems: [
      "In-Game Terminal Simulator: Custom syntax parser supporting commandline input, flag validation, and state triggers.",
      "Environmental Logic Mechanics: Water reflection shaders, day/night lighting cycles, and puzzle-triggered island drawbridges.",
      "Diegetic HUD & Interaction: Integrated tablet UI displaying logic logs, signal frequency decoders, and circuit status.",
      "Procedural Island Clues: Dynamic clue generation requiring algorithmic thinking and logic gates to bypass security barriers."
    ],
    overview: {
      genre: "First-Person Puzzle & Logic Adventure",
      platform: "PC / Windows",
      engineVersion: "Unreal Engine 4 (C++ & Blueprints)",
      teamSize: "2 Developers",
      summary: "A first-person puzzle survival adventure where a stranded programmer repairs logic terminals, bypasses security grids, and executes commands across a cyber-archipelago."
    },
    contributions: [
      "In-Game Terminal Simulator: Custom syntax parser supporting commandline input, flag validation, and state triggers.",
      "Environmental Logic Mechanics: Water reflection shaders, day/night lighting cycles, and puzzle-triggered island drawbridges.",
      "Diegetic HUD & Interaction: Integrated tablet UI displaying logic logs, signal frequency decoders, and circuit status.",
      "Procedural Island Clues: Dynamic clue generation requiring algorithmic thinking and logic gates to bypass security barriers."
    ],
    technicalBreakdown: {
      architecture: "The terminal interface uses a modular command dispatch table. Command strings are sanitized, tokenized into command/arg pairs, and validated against the puzzle state machine to trigger world actors via interface delegates.",
      challenges: "Creating responsive in-game terminal input with backspace, cursor positioning, and command history in Unreal Engine without introducing input state desynchronization.",
      codeSnippetTitle: "TerminalParser.cpp — In-Game Command Tokenizer & Dispatcher",
      codeLanguage: "cpp",
      codeSnippet: `// In-Game Diegetic Terminal Command Tokenizer & Dispatcher
bool UTerminalParser::ExecuteCommand(const FString& InCommandLine) {
    TArray<FString> Tokens;
    InCommandLine.TrimStartAndEnd().ParseIntoArray(Tokens, TEXT(" "), true);
    if (Tokens.Num() == 0) {
        return false;
    }

    const FString Command = Tokens[0].ToLower();

    if (Command == TEXT("bypass_grid")) {
        // Validate administrative override flag
        if (Tokens.Contains(TEXT("--force")) || Tokens.Contains(TEXT("-f"))) {
            if (ActiveSecurityNode && ActiveSecurityNode->ValidateOverrideKey()) {
                ActiveSecurityNode->UnlockDrawbridge();
                OnTerminalOutput.Broadcast(TEXT("OVERRIDE ACCEPTED: Power grid restored."));
                return true;
            }
        }
        OnTerminalOutput.Broadcast(TEXT("PERMISSION DENIED: Missing --force flag or invalid key."));
        return false;
    }

    OnTerminalOutput.Broadcast(FString::Printf(TEXT("Unknown command: %s"), *Command));
    return false;
}`
    },
    metrics: [
      { label: "Competition Honor", value: "2nd Place Winner (HackRush 2.0)" },
      { label: "Development Cycle", value: "48-Hour Hackathon" },
      { label: "Input Subsystem", value: "Custom In-Engine Shell Parser" },
      { label: "Puzzle Architecture", value: "Boolean Logic Gate Validation" }
    ],
    gallery: [
      {
        type: "video",
        url: assetUrl("videos/03_byte_oasis.mp4"),
        title: "ByteOasis Gameplay Reel",
        caption: "Terminal command parsing and environmental logic puzzles in action"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/byte_oasis/byte_oasis_maxres_thumbnail.jpg"),
        title: "Cyber-Archipelago Key Art",
        caption: "Stranded programmer exploring an island network protected by logic barriers"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/byte_oasis/action_captures/byte_oasis_frame_02_00m13s.jpg"),
        title: "Diegetic Terminal Interface",
        caption: "In-game terminal screen parsing commandline input, flags, and system state"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/byte_oasis/action_captures/byte_oasis_frame_03_00m21s.jpg"),
        title: "Security Grid Override",
        caption: "Executing commands to bypass security perimeters and unlock drawbridges"
      }
    ],
    links: {
      github: "https://github.com/KarthikVeeranala",
      note: "Project documentation and gameplay breakdown available on GitHub."
    }
  },
  {
    slug: "geek-o-wars",
    title: "Geek'O'Wars",
    category: "combat",
    engine: "Unreal Engine 4.21",
    type: "Top 3 / MLH FrostHacks",
    award: "Top 3 Winner — MLH FrostHacks",
    description: "A third-person survival shooter set inside a laptop motherboard, where microscopic antivirus agents purge infected CPU cores and logic gates.",
    role: "Lead Gameplay Engineer & Shaders Developer (36-Hour Hackathon)",
    period: "36-Hour Hackathon",
    thumbnail: assetUrl("portfolio_media/screenshots/geek_o_wars/geek_o_wars_hero.jpg"),
    video: assetUrl("videos/04_geek_o_wars.mp4"),
    tags: ["Unreal Engine 4.21", "Shaders", "Combat"],
    systems: [
      "TPS Character Controller: Responsive sprint, aim-down-sights, weapon overheating math, and projectile recoil dissipation.",
      "Cyber Motherboard Environment: Custom neon cyber shaders, reactive trace circuits, and emissive pulse heat sinks.",
      "Multi-Class Malware Spawner: Fast melee rushers, ranged trojan spreaders, and heavy boss anomalies with coordinated flanking.",
      "Wave Survival Resource Tension: Ammo scarcity drops, overheating cooldown balancing, and dynamic score multipliers."
    ],
    overview: {
      genre: "Third-Person Cyber Survival Shooter",
      platform: "PC / Windows",
      engineVersion: "Unreal Engine 4.21 (C++ & Materials)",
      teamSize: "Engineering Lead (FrostHacks Sprint)",
      summary: "A third-person survival shooter set inside a laptop motherboard, where microscopic antivirus agents purge infected CPU cores and logic gates."
    },
    contributions: [
      "TPS Character Controller: Responsive sprint, aim-down-sights, weapon overheating math, and projectile recoil dissipation.",
      "Cyber Motherboard Environment: Custom neon cyber shaders, reactive trace circuits, and emissive pulse heat sinks.",
      "Multi-Class Malware Spawner: Fast melee rushers, ranged trojan spreaders, and heavy boss anomalies with coordinated flanking.",
      "Wave Survival Resource Tension: Ammo scarcity drops, overheating cooldown balancing, and dynamic score multipliers."
    ],
    technicalBreakdown: {
      architecture: "Weapon systems derive from a base C++ firearm class handling cooldown timers, heat accumulation, and ballistic trace calls. Enemy AI utilizes behavior trees with perception components tuned for motherboard choke points.",
      challenges: "Ensuring smooth third-person camera framing and responsive reticle alignment in narrow PCB motherboard trenches.",
      codeSnippetTitle: "GeekWeapon.cpp — Heat Dissipation & Recoil Impulse Logic",
      codeLanguage: "cpp",
      codeSnippet: `// Weapon Heat Dissipation & Procedural Recoil Calculation
void AGeekWeapon::FireEnergyProjectile() {
    if (CurrentHeat >= MaxOverheatThreshold) {
        TriggerOverheatLockout();
        PlayAudioCue(OverheatWarningAudio);
        return;
    }

    // Accumulate weapon heat per discharge
    CurrentHeat += HeatPerDischarge;

    // Execute line trace with procedural muzzle spread
    const FVector MuzzleLoc = WeaponMesh->GetSocketLocation(TEXT("MuzzleSocket"));
    const FRotator MuzzleRot = GetAimSpreadRotation();
    SpawnLaserProjectile(MuzzleLoc, MuzzleRot);

    // Apply smooth procedural camera recoil kick
    if (APlayerController* PC = Cast<APlayerController>(GetOwner()->GetInstigatorController())) {
        PC->ClientStartCameraShake(FireCameraShakeClass, RecoilScale);
    }
}`
    },
    metrics: [
      { label: "Competition Honor", value: "Top 3 Winner (MLH FrostHacks)" },
      { label: "Development Cycle", value: "36-Hour Competitive Sprint" },
      { label: "Combat Model", value: "Third-Person Overheating Shooter" },
      { label: "Visual Shaders", value: "Custom Reactive Neon Emissive" }
    ],
    gallery: [
      {
        type: "video",
        url: assetUrl("videos/04_geek_o_wars.mp4"),
        title: "Geek'O'Wars TPS Gameplay Reel",
        caption: "Third-person survival combat and wave encounters inside the motherboard"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/geek_o_wars/geek_o_wars_hero.jpg"),
        title: "Geek'O'Wars Hero Banner",
        caption: "Microscopic cyber agent defending infected CPU hardware"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/geek_o_wars/02_cyber_encounter_1.jpg"),
        title: "Motherboard Circuit Arena",
        caption: "Custom neon PCB trace materials, heat sink towers, and CPU socket architecture"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/geek_o_wars/03_cyber_encounter_2.jpg"),
        title: "Emissive Circuit Shaders",
        caption: "Reactive pulse shaders illuminating circuit pathways during combat"
      }
    ],
    links: {
      github: "https://github.com/KarthikVeeranala",
      note: "Source repository and FrostHacks submission details on GitHub."
    }
  },
  {
    slug: "city-of-aethel",
    title: "City of Aethel",
    category: "combat",
    engine: "Phaser 3 & WebGL",
    type: "Aicade Internship / IGDC 2025 Indie Top 40",
    award: "IGDC 2025 Indie Top 40",
    description: "A Phaser 3 showcase with multi-phase boss choreography, 5-hit melee combos, i-frame dodges, and eight playable web prototypes.",
    role: "Lead Combat Designer & Gameplay Engineer at Aicade",
    period: "Jun 2025 – Nov 2025",
    thumbnail: assetUrl("portfolio_media/screenshots/phaser_games/fixed_city_of_aethel_arena.png"),
    video: assetUrl("videos/05_city_of_aethel.mp4"),
    tags: ["Phaser 3", "Melee", "WebGL"],
    systems: [
      "Responsive Melee Combat: 5-hit combo attack buffering, animation cancel windows, and precision parry timings.",
      "Dodge-Roll Invulnerability Frames: Precision i-frame calculation mitigating damage vectors within 180ms reaction windows.",
      "Multi-Phase Boss Fight Choreography: Telegraphed ground hazard indicators, multi-stage attack phase transitions, and posture breaks.",
      "2D Web Arcade Engine: 14 interactive prototypes testing rigid body ragdolls, ballistic parabolic curves, and wave tension."
    ],
    overview: {
      genre: "2D Action Platformer & Boss Fight Encounter",
      platform: "Web / Desktop Browser (WebGL)",
      engineVersion: "Phaser 3 & Matter.js Physics",
      teamSize: "Gameplay Engineering Intern (Aicade)",
      summary: "A Phaser 3 showcase with multi-phase boss choreography, 5-hit melee combos, i-frame dodges, and eight playable web prototypes."
    },
    contributions: [
      "Responsive Melee Combat: 5-hit combo attack buffering, animation cancel windows, and precision parry timings.",
      "Dodge-Roll Invulnerability Frames: Precision i-frame calculation mitigating damage vectors within 180ms reaction windows.",
      "Multi-Phase Boss Fight Choreography: Telegraphed ground hazard indicators, multi-stage attack phase transitions, and posture breaks.",
      "Side-Scroller Level Mapping & Encounter Flow: Designed the level maps, combat encounters, player objectives, and boss-fight areas alongside 14 interactive web arcade prototypes."
    ],
    technicalBreakdown: {
      architecture: "Input buffering utilizes a timestamped queue pattern that processes attack requests against state-machine action states (Idle, AttackSlash, DodgeRoll, Staggered), allowing attack cancels into evasive rolls.",
      challenges: "Ensuring deterministic combat timing in browser environments across varying display refresh rates (60Hz vs 120Hz/144Hz monitors).",
      codeSnippetTitle: "CombatController.ts — 5-Hit Melee Combo Input Buffer",
      codeLanguage: "typescript",
      codeSnippet: `// 5-Hit Melee Combo Buffer & Frame Cancellation Window
export class CombatController {
    private comboStep: number = 0;
    private lastAttackTime: number = 0;
    private readonly comboWindowMs: number = 220;
    private hasQueuedAttack: boolean = false;

    public handleAttackInput(currentTime: number): void {
        if (this.isDodgeRolling) {
            return; // Dodge takes priority over basic attack inputs
        }

        const delta = currentTime - this.lastAttackTime;

        // Check if input falls inside the combo chaining window
        if (delta <= this.comboWindowMs && this.comboStep < 5) {
            this.hasQueuedAttack = true;
        } else if (this.canInitiateAttack()) {
            this.executeComboStep(1);
        }
    }

    public onCurrentAnimationComplete(): void {
        if (this.hasQueuedAttack && this.comboStep < 5) {
            this.hasQueuedAttack = false;
            this.executeComboStep(this.comboStep + 1);
        } else {
            this.resetComboState();
        }
    }
}`
    },
    metrics: [
      { label: "Industry Recognition", value: "IGDC 2025 Showcase Selection" },
      { label: "Combo System", value: "5-Hit Queued Buffer (220ms)" },
      { label: "Dodge Mechanics", value: "180ms i-Frames (Invulnerable)" },
      { label: "Runtime Target", value: "60 FPS WebGL / Matter.js" }
    ],
    gallery: [
      {
        type: "video",
        url: assetUrl("videos/05_city_of_aethel.mp4"),
        title: "City of Aethel Boss Arena Reel",
        caption: "5-hit melee combos, dodge i-frames, and boss choreography in action"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/phaser_games/fixed_city_of_aethel_arena.png"),
        title: "Multi-Phase Boss Arena",
        caption: "Telegraphed ground hazards, attack cancel windows, and posture break mechanics"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/phaser_games/01_city_of_aethel.png"),
        title: "City of Aethel Key Art",
        caption: "Atmospheric pixel-art city ruins and story-driven action platformer setting"
      },
      {
        type: "image",
        url: assetUrl("portfolio_media/screenshots/phaser_games/00_main_hub.png"),
        title: "Aicade Prototype Arcade Vault",
        caption: "Collection of 14 rapid gameplay and physics prototypes built during internship"
      }
    ],
    links: {
      playableEmbed: true,
      github: "https://github.com/KarthikVeeranala",
      note: "Playable WebGL build accessible directly in the browser via the Play Demo button."
    }
  }
];

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  fullWidth?: boolean;
  verifiedLabel?: string;
  skills: { name: string; highlight?: boolean; context?: string }[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages used across engine systems, gameplay programming, and tools",
    iconName: "Code2",
    verifiedLabel: "C++ CODE & REPOSITORIES",
    skills: [
      { name: "C++ (C++17 / C++20)", highlight: true, context: "Unreal Engine 5.7 & UE4 Systems, Win32 API, Gameplay Physics" },
      { name: "TypeScript / JavaScript", highlight: true, context: "Phaser 3, WebGL & 14+ Playable Prototypes at Aicade" },
      { name: "C#", highlight: false, context: "General Coursework, Tools & Scripting" },
      { name: "Blueprints Visual Scripting", highlight: false, context: "Unreal Engine Gameplay Prototyping, AI & Level Logic" },
      { name: "Python", highlight: false, context: "Automation Scripts & Tooling Workflows" },
      { name: "HLSL / Materials", highlight: false, context: "Emissive PCB Trace Shaders & Water Reflections" }
    ]
  },
  {
    title: "Game Engines & Frameworks",
    description: "Production and rapid prototyping environments",
    iconName: "Gamepad2",
    verifiedLabel: "SHIPPED & PLAYABLE BUILDS",
    skills: [
      { name: "Unreal Engine 5.7 / UE4", highlight: true, context: "C++ Subsystems, E2E Automation Plugin, Gameplay & Blueprints" },
      { name: "Phaser 3 / WebGL", highlight: true, context: "City of Aethel (IGDC 2025) & 14+ Web Prototypes at Aicade" },
      { name: "Slate / UMG", highlight: false, context: "Custom UE5 Editor Panels, Runtime UI Reflection & Discovery" },
      { name: "Matter.js", highlight: false, context: "2D Rigid-Body Impulses, Parabolic Arcs & Verlet Ragdolls" }
    ]
  },
  {
    title: "Gameplay Systems & Physics",
    description: "Mechanics, physics models, and combat systems built across shipped projects",
    iconName: "Zap",
    verifiedLabel: "PLAYABLE DEMOS & HACKATHONS",
    skills: [
      { name: "6-DOF Zero-Gravity Flight", highlight: true, context: "Newtonian Thruster Inertia & Pitch/Yaw/Roll Torque (The Interlude)" },
      { name: "Predictive Lead-Target AI", highlight: true, context: "Velocity-Vector Intercept Math & Evasive Rolls (The Interlude)" },
      { name: "Melee Combos, i-Frames & Boss AI", highlight: true, context: "5-Hit Combo Buffers, 180ms Dodge Rolls & Multi-Phase Bosses (City of Aethel)" },
      { name: "In-Game Terminal & Logic Puzzles", highlight: false, context: "Command Tokenizer, Flag Validation & Security Overrides (ByteOasis)" },
      { name: "TPS Aiming, Recoil & Weapon Heat", highlight: false, context: "Overheat Cooldowns, Malware Waves & Flanking AI (Geek'O'Wars)" }
    ]
  },
  {
    title: "Engine Tools, Pipelines & Testing",
    description: "Automated game verification, OS sandboxing, and media capture built at Cyrus 365",
    iconName: "Terminal",
    verifiedLabel: "CYRUS 365 PRODUCTION HARNESS",
    skills: [
      { name: "Headless E2E Test Automation", highlight: true, context: "Project-Agnostic UE 5.7 C++ Verification Harness (Cyrus 365)" },
      { name: "Slate / UMG Reflection Crawler", highlight: true, context: "Recursive Runtime Widget Tree Inspection & Synthetic Input" },
      { name: "Win32 Desktop Sandboxing", highlight: true, context: "winsta0\\E2E_IsolatedDesktop for 0% OS Focus Theft" },
      { name: "GPU Backbuffer Video Streaming", highlight: false, context: "FViewport::ReadPixels Piped to FFmpeg 1080p H.264 Artifacts" },
      { name: "CI/CD & Dev Tooling", highlight: false, context: "Dedicated Server Commandlets, Git, GitHub Actions & Visual Studio" }
    ]
  },
  {
    title: "Game Design & Technical Design",
    description: "Bridging systems architecture with player-facing loops, encounter flow, and level design",
    iconName: "Compass",
    fullWidth: true,
    verifiedLabel: "LEVEL MAPS, PROTOTYPES & E2E FLOWS",
    skills: [
      { name: "Systems Deconstruction via Automation", highlight: true, context: "Dissecting Core Loops, Progression States & UI Flows Before Writing E2E Tests (Cyrus 365)" },
      { name: "Level Mapping & Encounter Design", highlight: true, context: "Side-Scroller Level Maps, Combat Pacing & Boss Arenas (City of Aethel)" },
      { name: "Core Gameplay Loops & Progression", highlight: true, context: "Player Objectives, Reward Structure & Puzzle Gates (ByteOasis, Cyrus 365)" },
      { name: "Combat Feel & Game Juice", highlight: false, context: "Hit-Stop Timing, Attack Telegraphs, Recoil & Camera Kickback" },
      { name: "Rapid Prototyping & Playtesting", highlight: false, context: "14+ Playable Mechanics Prototypes (Aicade) & 3x Hackathon Podiums" },
      { name: "Resource Tension & Pacing", highlight: false, context: "Ammo Scarcity, Heat Thresholds & Escalating Wave Directors (Geek'O'Wars, The Interlude)" }
    ]
  }
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Cyrus 365",
    role: "Unreal Engine Game Programmer Intern",
    period: "Mar 2026 – Sep 2026",
    location: "Hyderabad, India / Remote",
    type: "Commercial Internship",
    summary: "Engineered project-agnostic automated testing workflows and UI verification tooling in Unreal Engine 5.7 to validate game navigation, authentication, and gameplay determinism.",
    highlights: [
      "Architected Win32 isolated desktop sessions (winsta0\\E2E_IsolatedDesktop) to execute headless test suites in background without stealing OS focus.",
      "Built a recursive Slate/UMG widget reflection engine that traverses runtime UI hierarchies, validating state triggers dynamically.",
      "Integrated real-time GPU frame buffer streaming (FViewport::ReadPixels directly piped into FFmpeg stdin) to generate 1080p60 test evidence recordings.",
      "Implemented 90-second deterministic state guards for dedicated server commandlets to validate network synchronization and gameplay state in CI pipelines."
    ],
    tags: ["Unreal Engine 5.7", "C++", "Win32 API", "FFmpeg", "Slate / UMG", "CI Automation"]
  },
  {
    company: "Aicade",
    role: "Game Developer (Intern)",
    period: "Jun 2025 – Nov 2025",
    location: "Remote",
    type: "Commercial Internship",
    summary: "Developed and rapidly iterated on 14+ interactive browser-based gameplay prototypes in Phaser 3 / Matter.js, focusing on combat responsiveness, player feedback, and encounter design.",
    highlights: [
      "Contributed core gameplay and combat systems to City of Aethel, officially selected for the IGDC 2025 Showcase.",
      "Engineered a 5-hit combo input buffer with 200ms frame cancellation windows and 180ms invulnerability dodge rolls.",
      "Scripted multi-phase boss fight choreography with telegraphed hazards, dynamic camera shakes, and posture break states.",
      "Built ballistic arc trajectory prediction and Verlet integration ragdoll physics prototypes across web games."
    ],
    tags: ["Phaser 3", "TypeScript", "WebGL", "Combat Systems", "Matter.js", "Prototyping"]
  },
  {
    company: "Elysium Gaming Club — IARE",
    role: "President",
    period: "Sep 2024 – Apr 2025",
    location: "Hyderabad, India",
    type: "Collegiate Leadership",
    summary: "Led the campus gaming club and game development community at Institute of Aeronautical Engineering (IARE), organizing game dev workshops and collegiate esports events.",
    highlights: [
      "Helped organize Overkill'25, hosting collegiate esports tournaments, developer tech talks, and student project showcases.",
      "Mentored junior undergraduates in C++, Unreal Engine fundamentals, and gameplay mechanics prototyping.",
      "Coordinated campus game jams and collaborative team projects for regional hackathons."
    ],
    tags: ["Leadership", "Community Management", "Game Jams", "Mentorship"]
  },
  {
    company: "CodeDay",
    role: "Volunteer & Game Development Mentor",
    period: "Dec 2024",
    location: "Hyderabad, India",
    type: "Community Volunteer",
    summary: "Supported beginner game developers with game design concepts, C++, and Unreal Engine fundamentals, reviewing student project architectures and providing technical feedback.",
    highlights: [
      "Mentored student teams in 24-hour sprint project scoping, mechanics prioritization, and debugging.",
      "Provided code reviews on C++ and Blueprint gameplay systems for participating projects."
    ],
    tags: ["Mentorship", "Unreal Engine", "C++", "Community"]
  }
];

export interface AchievementItem {
  title: string;
  event: string;
  date: string;
  badge: string;
  projectSlug: string;
  description: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: "1st Place Winner",
    event: "CodeDay 2.0 (24-Hour Hackathon)",
    date: "Dec 2024",
    badge: "1ST PLACE",
    projectSlug: "the-interlude",
    description: "Awarded 1st place overall for The Interlude, a 6-DOF zero-gravity flight combat simulator developed from scratch in a 24-hour sprint."
  },
  {
    title: "Official Showcase Selection",
    event: "IGDC 2025 Showcase",
    date: "2025",
    badge: "SHOWCASE",
    projectSlug: "city-of-aethel",
    description: "Selected for the prestigious India Game Developer Conference (IGDC) 2025 Showcase for City of Aethel's responsive 5-hit combo and boss encounter mechanics."
  },
  {
    title: "2nd Place Winner",
    event: "HackRush 2.0 (48-Hour Hackathon)",
    date: "2024",
    badge: "2ND PLACE",
    projectSlug: "byteoasis",
    description: "Secured 2nd place overall for ByteOasis: Code to Escape, featuring an in-game diegetic terminal simulator and Boolean logic gate puzzle systems."
  },
  {
    title: "Top 3 Winner",
    event: "MLH FrostHacks (36-Hour Hackathon)",
    date: "2024",
    badge: "TOP 3",
    projectSlug: "geek-o-wars",
    description: "Ranked Top 3 for Geek'O'Wars, a third-person cyber survival combat shooter built in Unreal Engine 4.21 with custom reactive circuit shaders."
  }
];

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  badge: string;
  description: string;
  skills: string[];
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "CS50's Introduction to Game Development",
    issuer: "Harvard University",
    date: "Oct 2024",
    badge: "HARVARD",
    description: "Deep dive into 2D and 3D game engines, animation systems, state-driven gameplay mechanics, particle physics, and sound synthesis.",
    skills: ["Game Engines", "State Machines", "2D/3D Animation", "C#", "Lua / LÖVE2D"]
  },
  {
    title: "CS50x: Introduction to Computer Science",
    issuer: "HarvardX",
    date: "May 2025",
    badge: "HARVARDX",
    description: "Rigorous algorithmic foundations, manual heap and pointer memory management in C, algorithmic complexity, data structures, and Python.",
    skills: ["Low-Level C", "Memory & Pointers", "Algorithms & Big-O", "Data Structures", "Python"]
  },
  {
    title: "Unreal Engine 5: The Complete Beginner's Course",
    issuer: "Udemy",
    date: "May 2025",
    badge: "UNREAL ENGINE",
    description: "Production workflows in Unreal Engine 5: Blueprint architecture, Actor lifecycles, Niagara VFX, material shading, physics simulation, and landscape rendering.",
    skills: ["Unreal Engine 5", "Blueprint Architecture", "Niagara VFX", "Physics", "Lighting"]
  },
  {
    title: "Python for Data Science",
    issuer: "Infosys Springboard",
    date: "May 2025",
    badge: "INFOSYS",
    description: "Data analysis, data wrangling, scientific computing, and writing automated computational scripts in Python.",
    skills: ["Python", "Data Processing", "Scripting", "Automation Pipelines"]
  }
];
