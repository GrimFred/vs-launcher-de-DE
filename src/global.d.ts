declare global {
  type BasicConfigType = {
    version: number
    lastUsedInstallation: string | null
    defaultInstallationsFolder: string
    defaultVersionsFolder: string
  } & Record<string, unknown>

  type GameVersionType = {
    version: string
    path: string
  } & Record<string, unknown>

  type ModType = {
    modid: number
    releaseid: number
    filename: string
  } & Record<string, unknown>

  type InstallationType = {
    id: string
    name: string
    path: string
    version: string
    startParams: string
    mods: ModType[]
  } & Record<string, unknown>

  type ConfigType = BasicConfigType & {
    installations: InstallationType[]
    gameVersions: GameVersionType[]
  } & Record<string, unknown>

  type DownloadableGameVersionType = {
    version: string
    type: "stable" | "rc" | "pre"
    releaseDate: string
    windows: string
    linux: string
  }

  declare module "*.png" {
    const value: string
    export default value
  }
}

export {}
