declare global {
  interface Illusion {
    introduction: () => string;
    flair: () => string;
    payoff: () => string;
  }

  interface VolunteerIllusion extends Illusion {
    duration: number;
    title: string;
  }

  interface Trick {
    gimmick: string;
  }

  interface AudienceMember {
    name: string;
  }

  type Section = Illusion | Trick;

  interface Act {
    name: string;
    performer: string;
    sections: Section[];
  }
}

export const getAudienceMemberFor = ({ duration: number, title: string }) => {
  return new Promise<AudienceMember>((resolve) =>
    resolve(new AudienceMember())
  );
};

export const isTrick = (section: Section): section is Trick => {
  return section.gimmick;
};

export const isVolunteerIllusion = (
  illusion: Illusion
): illusion is VolunteerIllusion => {
  return illusion.duration;
};
