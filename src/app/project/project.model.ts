export class Project {
  constructor(
    public id?: number,
    public name?: string,
    public description?: string,
    public keywords?: string[],
    public githubLink?: string,
    public projectLink?: string,
    public imagePath?: string
  ) {}
}
