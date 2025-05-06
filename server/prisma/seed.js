import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password123', 10);

  const user = await prisma.user.create({
    data: {
      email: 'dummy@taskmanager.com',
      password: hashedPassword,
      tasks: {
        create: [
          {
            title: 'Initial Task',
            description: 'This is a sample task.',
            dueDate: new Date('2025-05-01'),
            priority: 'high',
          },
          {
            title: 'Another Task',
            description: 'This one has medium priority.',
            dueDate: new Date('2025-05-05'),
            priority: 'medium',
          },
        ],
      },
    },
  });

  console.log(`Seeded user: ${user.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());