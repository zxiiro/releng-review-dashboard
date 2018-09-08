userdata['cl778h'] = {
  "identity": ids["cl778h"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 6,
  "reviewCountMinus1": 2,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1516309560000,
  "lastActiveDate": 1522764260000,
  "activeDayCount": 8,
  "commits": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ia09f3194407f6c94d8cb1adfbb4d32e9a4592ff6",
      "commitNumber": 9109,
      "subject": "Make rtd jobs verbose",
      "owner": ids["cl778h"],
      "url": "https://gerrit.linuxfoundation.org/infra/9109",
      "commitMessage": "Make rtd jobs verbose\n\nAdd set -x flag so these scripts echo steps in Jenkins output.\n\nChange-Id: Ia09f3194407f6c94d8cb1adfbb4d32e9a4592ff6\nSigned-off-by: Lott, Christopher (cl778h) \u003ccl778h@att.com\u003e\n",
      "createdOnDate": 1519915269000,
      "lastUpdatedDate": 1519921072000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1519915269000,
          "reviewer": ids["cl778h"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1519915478000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/257/"
        },
        {
          "timestamp": 1519915656000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/257/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/257"
        },
        {
          "timestamp": 1519919884000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2\n\n(2 comments)\n\nShould fix the comment but can be done in another patch. I\u0027m good with this."
        },
        {
          "timestamp": 1519920380000,
          "reviewer": ids["cl778h"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1519920613000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/258/"
        },
        {
          "timestamp": 1519920788000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/258/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/258"
        },
        {
          "timestamp": 1519921045000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1519921072000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "f35954d711199ac63bfa4d70591074f3d07f715b",
          "parents": [
            "0116521b32584814cbd2ad9f1dd84bfbe4fd381b"
          ],
          "ref": "refs/changes/09/9109/1",
          "uploader": ids["cl778h"],
          "createdOnDate": 1519915269000,
          "author": ids["cl778h"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1519919884000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1519915656000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/rtd-trigger-build.sh",
              "line": 14,
              "reviewer": ids["zxiiro"],
              "message": "There\u0027s nothing virtualenv in this script although it does need to ignore -u to access GERRIT_BRANCH properly.",
              "patchSetTimestamp": 1519915269000
            },
            {
              "file": "shell/rtd-verify.sh",
              "line": 14,
              "reviewer": ids["zxiiro"],
              "message": "Realized this comment a little wrong too as there\u0027s nothing virtualenv here but it does need it for GERRIT_* parameters.",
              "patchSetTimestamp": 1519915269000
            }
          ],
          "sizeInsertions": 5,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff",
          "parents": [
            "0116521b32584814cbd2ad9f1dd84bfbe4fd381b"
          ],
          "ref": "refs/changes/09/9109/2",
          "uploader": ids["cl778h"],
          "createdOnDate": 1519920380000,
          "author": ids["cl778h"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1519921045000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1519921072000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1519920788000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iec5e0b12a287f1945eedc895a25dd16e74b47082",
      "commitNumber": 8685,
      "subject": "Repair shell-include directive",
      "owner": ids["cl778h"],
      "url": "https://gerrit.linuxfoundation.org/infra/8685",
      "commitMessage": "Repair shell-include directive\n\nChange stage macro to use include-raw instead of include-raw-escape to\nwork around a JJB bug that inserts lftools_activate with double braces.\n\nChange-Id: Iec5e0b12a287f1945eedc895a25dd16e74b47082\nSigned-off-by: Christopher Lott (cl778h) \u003cclott@research.att.com\u003e\n",
      "createdOnDate": 1517933528000,
      "lastUpdatedDate": 1517934431000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1517933528000,
          "reviewer": ids["cl778h"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1517933600000,
          "reviewer": ids["cl778h"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1517933635000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1517933776000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/234/"
        },
        {
          "timestamp": 1517934144000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/234/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/234"
        },
        {
          "timestamp": 1517934431000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "455f1130ca061da03e59e198cb4f829f528274ac",
          "parents": [
            "f52936163e512a126befed7c091bcba94f9fc768"
          ],
          "ref": "refs/changes/85/8685/1",
          "uploader": ids["cl778h"],
          "createdOnDate": 1517933528000,
          "author": ids["cl778h"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -2
        },
        {
          "number": 2,
          "revision": "be559eba3d91bcf9e0eebe1199843cb918fa1b49",
          "parents": [
            "f52936163e512a126befed7c091bcba94f9fc768"
          ],
          "ref": "refs/changes/85/8685/2",
          "uploader": ids["cl778h"],
          "createdOnDate": 1517933600000,
          "author": ids["cl778h"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1517933635000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1517934431000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1517934144000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I70a1deefd23bc9498f6c6013fb8751298dec7f53",
      "commitNumber": 8566,
      "subject": "Refactor macro/template cron param",
      "owner": ids["cl778h"],
      "url": "https://gerrit.linuxfoundation.org/infra/8566",
      "commitMessage": "Refactor macro/template cron param\n\nBe consistent with cron parameter: define in macro, use in template.\nNever hard-code a trigger in a job template.\nDocument the parameters in the RST file.\n\nChange-Id: I70a1deefd23bc9498f6c6013fb8751298dec7f53\nSigned-off-by: Christopher Lott (cl778h) \u003cclott@research.att.com\u003e\n",
      "createdOnDate": 1517248426000,
      "lastUpdatedDate": 1517254712000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1517248426000,
          "reviewer": ids["cl778h"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1517248612000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\n(3 comments)\n\nWould be good to document these settings in docs/lf-maven-jobs.rst as well."
        },
        {
          "timestamp": 1517248817000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/202/"
        },
        {
          "timestamp": 1517248835000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1:\n\nA challenge here is how to use job groups and supply different values to cron/trigger parameters.  Different templates use the same parameter name \"cron\"."
        },
        {
          "timestamp": 1517248970000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1517249046000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/202/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/202"
        },
        {
          "timestamp": 1517249053000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1517251833000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1517251923000,
          "reviewer": ids["cl778h"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1517252042000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/203/"
        },
        {
          "timestamp": 1517252282000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/203/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/203"
        },
        {
          "timestamp": 1517252325000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1517252427000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\nWe should make sure the documentation is updated for the new cron parameter. I can take care of it later if you don\u0027t get to it first."
        },
        {
          "timestamp": 1517252448000,
          "reviewer": ids["cl778h"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1517252664000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/204/ (1/2)"
        },
        {
          "timestamp": 1517252680000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/66/ (2/2)"
        },
        {
          "timestamp": 1517252996000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/204/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/204\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/66/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/66"
        },
        {
          "timestamp": 1517254710000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1517254712000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7ace36025a0b1bd46b98b601046f1b6fb8bcff7d",
          "parents": [
            "cc00605631e750be1698bd247442172c483a7e9b"
          ],
          "ref": "refs/changes/66/8566/1",
          "uploader": ids["cl778h"],
          "createdOnDate": 1517248426000,
          "author": ids["cl778h"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1517248612000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1517249046000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 471,
              "reviewer": ids["zxiiro"],
              "message": "We don\u0027t want this to be a weekly procedure by default. Projects should override this in their project.yaml file in the \"project\" section.\n\nThis should default to (\u0027\u0027) blank.",
              "patchSetTimestamp": 1517248426000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 542,
              "reviewer": ids["cl778h"],
              "message": "Thanh, similar to the sonar template behavior and my change: the old template was hardcoded to run weekly; the new template uses a parameter value from the macro to run weekly.  What\u0027s your thought about the merge job default?",
              "patchSetTimestamp": 1517248426000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 542,
              "reviewer": ids["zxiiro"],
              "message": "Yes, this is the same situation. Please keep the cron setting defaulting to the same behaviour as it was before.\n\nThe reason we need to run merge jobs on a weekly basis is to ensure that artifacts are refreshed in Nexus since they will be deleted automatically from Nexus if they are 3 weeks old.",
              "patchSetTimestamp": 1517248426000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 601,
              "reviewer": ids["zxiiro"],
              "message": "Same here.",
              "patchSetTimestamp": 1517248426000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 712,
              "reviewer": ids["zxiiro"],
              "message": "same here",
              "patchSetTimestamp": 1517248426000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 757,
              "reviewer": ids["cl778h"],
              "message": "Thanh, it appears to me that the sonar job is currently hard-wired to run weekly via the timed trigger.  My change moves the value of the trigger to a parameter in the macro but does not change the behavior.  Your Gerrit comment suggests that you do NOT want it hard-wired to run weekly.  Please clarify.",
              "patchSetTimestamp": 1517248426000
            },
            {
              "file": "jjb/lf-maven-jobs.yaml",
              "line": 757,
              "reviewer": ids["zxiiro"],
              "message": "ah I missed that this one was the sonar job. Yes in this case the code here is fine. For the other templates please default to a blank cron job.\n\nThanks for catching this!",
              "patchSetTimestamp": 1517248426000
            }
          ],
          "sizeInsertions": 5,
          "sizeDeletions": -4
        },
        {
          "number": 2,
          "revision": "a17c2ea98abb8958c56eddfc6727b746315f2f8b",
          "parents": [
            "cc00605631e750be1698bd247442172c483a7e9b"
          ],
          "ref": "refs/changes/66/8566/2",
          "uploader": ids["cl778h"],
          "createdOnDate": 1517251923000,
          "author": ids["cl778h"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1517252427000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1517252282000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -3
        },
        {
          "number": 3,
          "revision": "bc80d1d2ea640dfedb2dcfa5097c5ff275c36b71",
          "parents": [
            "cc00605631e750be1698bd247442172c483a7e9b"
          ],
          "ref": "refs/changes/66/8566/3",
          "uploader": ids["cl778h"],
          "createdOnDate": 1517252448000,
          "author": ids["cl778h"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1517254710000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1517254712000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1517252996000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 12,
          "sizeDeletions": -3
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ia24912694223d4e8df81f591829dfb4b4ed5ff22",
      "commitNumber": 10933,
      "subject": "Release global-jjb v0.20.0",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/10933",
      "commitMessage": "Release global-jjb v0.20.0\n\nChange-Id: Ia24912694223d4e8df81f591829dfb4b4ed5ff22\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1527873563000,
      "lastUpdatedDate": 1528149337000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["agardner"],
        ids["bramwelt"],
        ids["askb"],
        ids["valderrv"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["jluhrsen"],
        ids["cl778h"],
        ids["fdegir"]
      ],
      "comments": [
        {
          "timestamp": 1527873563000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1527873584000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-2\n\nPlease review, but hold off releasing until Monday."
        },
        {
          "timestamp": 1527873744000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/474/"
        },
        {
          "timestamp": 1527873937000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/474/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/474"
        },
        {
          "timestamp": 1527994200000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1527994303000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/483/"
        },
        {
          "timestamp": 1527994423000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/483/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/483"
        },
        {
          "timestamp": 1528124964000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1528124970000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1528125033000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/488/ (1/2)"
        },
        {
          "timestamp": 1528125078000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/192/ (2/2)"
        },
        {
          "timestamp": 1528125192000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/488/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/488\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/192/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/192"
        },
        {
          "timestamp": 1528127445000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1528127508000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1528127659000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\n(2 comments)"
        },
        {
          "timestamp": 1528127837000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1528127953000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        },
        {
          "timestamp": 1528149337000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+1"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "b64773220f85432331861c22bb4e20052193a418",
          "parents": [
            "86e26cea99847511bc199afaf981cc41e5934d64"
          ],
          "ref": "refs/changes/33/10933/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1527873563000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1527873584000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1527873937000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 46,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "c9d1ba5492e983981a4c5f3cb1b0cc13e4209345",
          "parents": [
            "ed23bb62a50a877c2b6b5904cc4963968f17acc3"
          ],
          "ref": "refs/changes/33/10933/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1527994200000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1527873584000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1527994423000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 45,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "d1b7f48bb76729ddde974357b4de845db71bb5a8",
          "parents": [
            "ed23bb62a50a877c2b6b5904cc4963968f17acc3"
          ],
          "ref": "refs/changes/33/10933/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1528124964000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1528124970000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1528127953000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1528127837000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1528149337000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528125192000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/conf.py",
              "line": 72,
              "reviewer": ids["bramwelt"],
              "message": "Oh, we should update global-jjb to use lfdocs-conf...just a note. This looks good though.",
              "patchSetTimestamp": 1528124964000
            },
            {
              "file": "docs/conf.py",
              "line": 72,
              "reviewer": ids["zxiiro"],
              "message": "Yes, there was a problem with it though and I backed out awhile ago. I can\u0027t remember what the problem was....",
              "patchSetTimestamp": 1528124964000
            },
            {
              "file": "relnotes/v0.20.0.txt",
              "line": 15,
              "reviewer": ids["bramwelt"],
              "message": "0.19.1 or .2",
              "patchSetTimestamp": 1528124964000
            },
            {
              "file": "relnotes/v0.20.0.txt",
              "line": 15,
              "reviewer": ids["zxiiro"],
              "message": "Considering release notes were not sent out for the 0.19.2 release the change log includes everything from 0.19.0.",
              "patchSetTimestamp": 1528124964000
            }
          ],
          "sizeInsertions": 46,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I65f4f6dc73382b91940620aba587f5fe56259eb1",
      "commitNumber": 10394,
      "subject": "Remove maven_metadata_validate function",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/10394",
      "commitMessage": "Remove maven_metadata_validate function\n\nThis function was originally added to detect a bug with Maven 3.5.1\nand earlier. At the time the OpenDaylight community was not yet ready\nto migrate to 3.5.2 from 3.3.9 so we implemented this function as a\nway to detect the metadata issues.\n\nThis function ended up causing some edge case issues and is not worth\nmaintaining. Remove the function and recommend all projects use Maven\n3.5.2 as a minimum.\n\nThe specific issue in Maven was that sometimes the deploy phase would\ngenerate an off by one timestamp mismatch between the metadata and the\nfilename of the artifacts. This causes invalid metadata and then\nbuilds against affected artifacts fail.\n\nIssue: RELENG-927\nChange-Id: I65f4f6dc73382b91940620aba587f5fe56259eb1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1525356877000,
      "lastUpdatedDate": 1525821457000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["lf-jenkins"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1525356877000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1525356949000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/404/ (1/2)"
        },
        {
          "timestamp": 1525356973000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1525357007000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/145/ (2/2)"
        },
        {
          "timestamp": 1525357119000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/404/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/404\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/145/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/145"
        },
        {
          "timestamp": 1525821455000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1525821457000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "008d7f16e3784f03c60a4e425b064447efff210f",
          "parents": [
            "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02"
          ],
          "ref": "refs/changes/94/10394/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1525356877000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525821455000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1525821457000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525357119000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 18,
          "sizeDeletions": -79
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I0538f3c15e6df43369ef5e7756a76236d52d0a9e",
      "commitNumber": 10101,
      "subject": "Release global-jjb v0.18.0",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/10101",
      "commitMessage": "Release global-jjb v0.18.0\n\nChange-Id: I0538f3c15e6df43369ef5e7756a76236d52d0a9e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1524087627000,
      "lastUpdatedDate": 1524241961000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["cl778h"],
        ids["fdegir"]
      ],
      "comments": [
        {
          "timestamp": 1524087627000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1524233305000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1524233411000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/375/ (1/2)"
        },
        {
          "timestamp": 1524233439000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/137/ (2/2)"
        },
        {
          "timestamp": 1524233558000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/375/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/375\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/137/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/137"
        },
        {
          "timestamp": 1524241656000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1524241729000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/377/ (1/2)"
        },
        {
          "timestamp": 1524241777000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/138/ (2/2)"
        },
        {
          "timestamp": 1524241872000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1524241909000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/377/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/377\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/138/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/138"
        },
        {
          "timestamp": 1524241961000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "406885215c3f4567b1c0773e37e5fa365db2c2fb",
          "parents": [
            "9f237eb9ddb18fe6e01cbadea0a75e36a0baf8d7"
          ],
          "ref": "refs/changes/01/10101/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1524087627000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 76,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "118da3882fa8825891966151a69238e932b780ee",
          "parents": [
            "379003e857da08bae0b43292d22ce66bca5e0e86"
          ],
          "ref": "refs/changes/01/10101/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1524233305000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524233558000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 81,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "1493b95e0d80860a9d8aef83e22ee49d5988ad96",
          "parents": [
            "382ed84ea517b18e8b6cc9df962d98057c560386"
          ],
          "ref": "refs/changes/01/10101/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1524241656000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1524241872000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1524241961000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524241909000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 83,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Id13aee7244cce6328fd10cbe495b5fb3e7069924",
      "commitNumber": 9720,
      "subject": "Pin tox to \u003c3.0.0 as it breaks detox",
      "owner": ids["jeremyphelps"],
      "url": "https://gerrit.linuxfoundation.org/infra/9720",
      "commitMessage": "Pin tox to \u003c3.0.0 as it breaks detox\n\nIssue-ID: RELENG-856\nChange-Id: Id13aee7244cce6328fd10cbe495b5fb3e7069924\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
      "createdOnDate": 1522762911000,
      "lastUpdatedDate": 1522765701000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1522762911000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1522762958000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1522763157000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/312/"
        },
        {
          "timestamp": 1522763301000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/312/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/312/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/312"
        },
        {
          "timestamp": 1522763664000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1: Code-Review+1\n\n(1 comment)"
        },
        {
          "timestamp": 1522763847000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1522763897000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1:\n\nThis fails with the same proclimit-not-found error as everywhere else.  Suspect you\u0027ll have to +1 verify manually.  :/"
        },
        {
          "timestamp": 1522763965000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1:\n\n\u003e (1 comment)\n\nAgreed, we will look at those next."
        },
        {
          "timestamp": 1522763991000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1:\n\n\u003e This fails with the same proclimit-not-found error as everywhere\n \u003e else.  Suspect you\u0027ll have to +1 verify manually.  :/\n\nI updated the verify job, our gerrit does not allow an override."
        },
        {
          "timestamp": 1522764035000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/313/"
        },
        {
          "timestamp": 1522764260000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1: Code-Review-1\n\nSuggest adding this to commit message:\n\nIssue-ID: RELENG-856"
        },
        {
          "timestamp": 1522764331000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/313/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/313"
        },
        {
          "timestamp": 1522764440000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1522764454000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 2:\n\n\u003e Suggest adding this to commit message:\n \u003e \n \u003e Issue-ID: RELENG-856\n\nDone"
        },
        {
          "timestamp": 1522764690000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/314/"
        },
        {
          "timestamp": 1522765124000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/314/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/314"
        },
        {
          "timestamp": 1522765691000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1522765701000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "388edb2d36117dabcb4b02f11e54b727731f361b",
          "parents": [
            "2fd4ef3727651924618efac74b88e104c858ead2"
          ],
          "ref": "refs/changes/20/9720/1",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1522762911000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1522762958000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1522764331000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1522764260000,
              "grantedBy": ids["cl778h"]
            }
          ],
          "comments": [
            {
              "file": "shell/tox-install.sh",
              "line": 22,
              "reviewer": ids["cl778h"],
              "message": "Perhaps it would be wise to pin all the tools here, not just tox?  Anyone can break us anytime.",
              "patchSetTimestamp": 1522762911000
            }
          ],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "edf56a1e9ce91d936388621ecfc850162aabfebd",
          "parents": [
            "2fd4ef3727651924618efac74b88e104c858ead2"
          ],
          "ref": "refs/changes/20/9720/2",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1522764440000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1522765691000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1522765701000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1522765124000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I9bc146170e150097b3b9a30ec0456173bba9b1ef",
      "commitNumber": 9496,
      "subject": "Quit build if submodule not found",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9496",
      "commitMessage": "Quit build if submodule not found\n\nIn the monolithic docs build we only care to build if the\nproject is really a submodule of the monolithic docs build.\nIf not then skip the build as the project should be providing\ntheir own docs verify job.\n\nIssue: RELENG-845\nChange-Id: I9bc146170e150097b3b9a30ec0456173bba9b1ef\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1521487908000,
      "lastUpdatedDate": 1521489302000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["shague"],
        ids["lf-jenkins"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1521487908000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1521487925000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1521488059000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/295/"
        },
        {
          "timestamp": 1521488275000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/295/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/295"
        },
        {
          "timestamp": 1521489298000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1521489302000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4d3e0b4e7bd54c19e1ebdbe4d79e8861ad158c70",
          "parents": [
            "aa205517366205dd017d0801bd0cfe104e742c1a"
          ],
          "ref": "refs/changes/96/9496/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1521487908000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1521489298000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1521489302000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1521488275000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 8,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I04020587acfb8b6550c0221ebfb97a501f46b15a",
      "commitNumber": 9387,
      "subject": "Support PostBuildScript 2.x",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9387",
      "commitMessage": "Support PostBuildScript 2.x\n\nThis is a breaking change that requires consumers of global-jjb\nto switch to JJB 2.0.3 and install PostBuildScript 2.x in Jenkins.\n\nIt updates lf-infra-publish macro to switch to the PostBuildScript 2.x\nYAML definitions.\n\nIssue: RELENG-832\nChange-Id: I04020587acfb8b6550c0221ebfb97a501f46b15a\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1520819425000,
      "lastUpdatedDate": 1521481066000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["ryjones"],
        ids["zxiiro"],
        ids["agardner"],
        ids["bramwelt"],
        ids["askb"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["cl778h"],
        ids["fdegir"]
      ],
      "comments": [
        {
          "timestamp": 1520819425000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1520819460000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-2\n\nTargetting this for global-jjb v0.18.0 so blocking this change until v0.17.0 is released first."
        },
        {
          "timestamp": 1520819910000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/284/"
        },
        {
          "timestamp": 1520820094000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/284/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/284/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/284"
        },
        {
          "timestamp": 1520867783000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1520867810000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: -Code-Review"
        },
        {
          "timestamp": 1520867842000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/286/"
        },
        {
          "timestamp": 1520868025000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/286/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/286/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/286"
        },
        {
          "timestamp": 1520868067000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nThis is gonna fail until we bump the tox verify job to JJB 2.0.3."
        },
        {
          "timestamp": 1520868148000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1520868180000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1520868320000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        },
        {
          "timestamp": 1520868330000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/288/"
        },
        {
          "timestamp": 1520868572000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/288/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/288"
        },
        {
          "timestamp": 1520868953000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+1\n\nI believe this is accurate, but I\u0027ll let another set of eyes say yes for now."
        },
        {
          "timestamp": 1520870230000,
          "reviewer": ids["ryjones"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1520894565000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nI am CI"
        },
        {
          "timestamp": 1520895198000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nrecheck"
        },
        {
          "timestamp": 1520895333000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/289/"
        },
        {
          "timestamp": 1520895491000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/289/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/289"
        },
        {
          "timestamp": 1521481065000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1521481066000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "b99e1e669c933d8721ee6b4dc89ad9f849b56323",
          "parents": [
            "de2a34225d44551c358afe05403f4cb3006f50e6"
          ],
          "ref": "refs/changes/87/9387/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520819425000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1520819460000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1520820094000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        },
        {
          "number": 2,
          "revision": "ffcafd7f457786329546f0067663fab665aa3ebd",
          "parents": [
            "e384cae5689bc7e94628bac67cd7099aa2235710"
          ],
          "ref": "refs/changes/87/9387/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520867783000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1520868025000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-macros.yaml",
              "line": 395,
              "reviewer": ids["agrimberg"],
              "message": "This is a deviation from what we\u0027ve been doing previously. So, we\u0027re going to mark as UNSTABLE now instead of FAILED if the postbuildscript fails?",
              "patchSetTimestamp": 1520867783000
            },
            {
              "file": "jjb/lf-macros.yaml",
              "line": 395,
              "reviewer": ids["zxiiro"],
              "message": "Yes, unfortunately we have to because the new PostBuildScript plugin will fail the entire build we don\u0027t set this option. Which is worse. Previously it just ignored and did affect the build result.\n\nOn the other hand marking unstable might be a good idea to let us know something is wrong and we have to investigate. These scripts should be coded in away that allows it to pass in all of our use cases.",
              "patchSetTimestamp": 1520867783000
            }
          ],
          "sizeInsertions": 11,
          "sizeDeletions": -5
        },
        {
          "number": 3,
          "revision": "f76c82abd9ad7f86b1fdcc0b77a78edf2e87c2c5",
          "parents": [
            "e384cae5689bc7e94628bac67cd7099aa2235710"
          ],
          "ref": "refs/changes/87/9387/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520868180000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1521481065000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1521481066000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1520870230000,
              "grantedBy": ids["ryjones"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520895491000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 12,
          "sizeDeletions": -6
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I93c8256193933a04e8732963216f69424cef3a5f",
      "commitNumber": 7281,
      "subject": "Document job-group defaults order of priority",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/7281",
      "commitMessage": "Document job-group defaults order of priority\n\nWe discovered that job-group variable definitions appear to\nhave higher precedence than project definitions. This caused a problem\nfor us in global-jjb as we would like to allow projects to override\ndefault variables.\n\nWe should make it best practice that global-jjb stops providing\njob-group definitions and deprecating any existing job groups.\n\nVia patch I2b824e3cc89667698db8ebfdd3ce43f551e961d7 we were able to\nresolve this for JJB version.\n\nChange-Id: I93c8256193933a04e8732963216f69424cef3a5f\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1509736954000,
      "lastUpdatedDate": 1521182647000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["askb"],
        ids["jwagantall"],
        ids["lf-jenkins"],
        ids["cl778h"],
        ids["fdegir"]
      ],
      "comments": [
        {
          "timestamp": 1509736954000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1509736969000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nQuick note for now to remind us to document this."
        },
        {
          "timestamp": 1520815951000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1520816025000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/95/ (1/2)"
        },
        {
          "timestamp": 1520816061000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/280/ (2/2)"
        },
        {
          "timestamp": 1520816241000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/280/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/280/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/280\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/95/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/95"
        },
        {
          "timestamp": 1520816884000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1520816998000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/97/ (1/2)"
        },
        {
          "timestamp": 1520817067000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/283/ (2/2)"
        },
        {
          "timestamp": 1520817211000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/97/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/97\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/283/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/283"
        },
        {
          "timestamp": 1520817218000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1521182643000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1521182647000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "3f93b9d2bf3a21d49f892fc92e5a4f98dacb24b1",
          "parents": [
            "f1d2d262e4e1b095c2d2c577c042404f1f3d4e1c"
          ],
          "ref": "refs/changes/81/7281/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1509736954000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 4,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "c0d43fddedfc6ebe075df46f4a05e325053ef923",
          "parents": [
            "59b3a3c53b1604b9aa5d46ed8e7083d46c6f95d1"
          ],
          "ref": "refs/changes/81/7281/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520815951000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1520816241000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": -3
        },
        {
          "number": 3,
          "revision": "b7aabb1e702202e5c325978e2dad20ce350b600c",
          "parents": [
            "de2a34225d44551c358afe05403f4cb3006f50e6"
          ],
          "ref": "refs/changes/81/7281/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520816884000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1520817218000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1521182643000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1521182647000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520817211000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": -3
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I13cf313e1875eabb50290c2409ef632eaa7183f7",
      "commitNumber": 9386,
      "subject": "Release global-jjb v0.17.0",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9386",
      "commitMessage": "Release global-jjb v0.17.0\n\nChange-Id: I13cf313e1875eabb50290c2409ef632eaa7183f7\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1520817870000,
      "lastUpdatedDate": 1520867632000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["askb"],
        ids["jwagantall"],
        ids["lf-jenkins"],
        ids["jluhrsen"],
        ids["cl778h"],
        ids["fdegir"]
      ],
      "comments": [
        {
          "timestamp": 1520817870000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1520867389000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/98/ (1/2)"
        },
        {
          "timestamp": 1520867406000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/285/ (2/2)"
        },
        {
          "timestamp": 1520867628000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/98/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/98\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/285/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/285"
        },
        {
          "timestamp": 1520867630000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1520867632000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "90e4e825b3d0ac5959122c50e457419ad0cfe137",
          "parents": [
            "de2a34225d44551c358afe05403f4cb3006f50e6"
          ],
          "ref": "refs/changes/86/9386/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520817870000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1520867630000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1520867632000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520867628000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 61,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Id07a1e4065b03489260dfe1d0b86cacf8d60238d",
      "commitNumber": 8384,
      "subject": "Document pyenv usage in the tox job",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8384",
      "commitMessage": "Document pyenv usage in the tox job\n\nChange-Id: Id07a1e4065b03489260dfe1d0b86cacf8d60238d\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1515784441000,
      "lastUpdatedDate": 1520816847000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1515784441000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1515784563000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/168/ (1/2)"
        },
        {
          "timestamp": 1515784612000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/59/ (2/2)"
        },
        {
          "timestamp": 1515784785000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/168/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/168/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/168\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/59/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/59"
        },
        {
          "timestamp": 1520814995000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1520815049000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1520815050000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/94/ (1/2)"
        },
        {
          "timestamp": 1520815129000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/279/ (2/2)"
        },
        {
          "timestamp": 1520815297000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/279/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/279/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/279\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/94/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/94"
        },
        {
          "timestamp": 1520816500000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1520816560000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/96/ (1/2)"
        },
        {
          "timestamp": 1520816603000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/281/ (2/2)"
        },
        {
          "timestamp": 1520816765000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/96/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/96\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/281/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/281"
        },
        {
          "timestamp": 1520816845000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1520816847000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "56a5b0dfee7824adbdab5be97ffcf33b719bcb21",
          "parents": [
            "7b76f3eba41881e26089e33b0118416d01643fe7"
          ],
          "ref": "refs/changes/84/8384/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515784441000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1515784785000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "accd0ea85d67c773f7e466131c95360d9a6c372b",
          "parents": [
            "59b3a3c53b1604b9aa5d46ed8e7083d46c6f95d1"
          ],
          "ref": "refs/changes/84/8384/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520814995000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1520815049000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1520815297000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "de2a34225d44551c358afe05403f4cb3006f50e6",
          "parents": [
            "e7cead539be034e8715ab17d497d6b0886f065e1"
          ],
          "ref": "refs/changes/84/8384/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520816500000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1520816845000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1520816847000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520816765000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 9,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Idad3078942618b7d8fd08a40bf9e4e5ed5a0dc48",
      "commitNumber": 8429,
      "subject": "Add script to manage Jenkins cloud cfg",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8429",
      "commitMessage": "Add script to manage Jenkins cloud cfg\n\nA groovy script to manage the Jenkins global cloud cfg\nprogrammatically. This script reads configuration from\nthe directory jenkins-config/clouds to configure cloud\nconfiguration in Jenkins. Refer to the documentation for\ndetails.\n\nNo upgrade consideration is necessary as this script\nautomatically detects the absence of the jenkins-config/clouds\ndirectory and disables the Cloud configuration.\n\nIssue: RELENG-804\nChange-Id: Idad3078942618b7d8fd08a40bf9e4e5ed5a0dc48\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1516291829000,
      "lastUpdatedDate": 1520383652000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jluhrsen"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["cl778h"],
        ids["fdegir"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1516291829000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1516297710000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1518795109000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1518811640000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Commit message was updated."
        },
        {
          "timestamp": 1518820619000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1518914695000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1519782533000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6: Patch Set 5 was rebased."
        },
        {
          "timestamp": 1519786782000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1519848857000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1519849164000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 9."
        },
        {
          "timestamp": 1519951179000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 10."
        },
        {
          "timestamp": 1519951769000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 11."
        },
        {
          "timestamp": 1519953957000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 12."
        },
        {
          "timestamp": 1520027647000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 13."
        },
        {
          "timestamp": 1520027724000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/87/ (1/2)"
        },
        {
          "timestamp": 1520027759000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/259/ (2/2)"
        },
        {
          "timestamp": 1520027909000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 13: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/87/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/87\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/259/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/259"
        },
        {
          "timestamp": 1520028458000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 13: Code-Review+1\n\nReady to go. Been testing in the sandbox and it\u0027s went well.\n\nhttps://jenkins.opendaylight.org/sandbox/job/builder-jenkins-cfg-merge/"
        },
        {
          "timestamp": 1520028541000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 13:\n\nShould probably mention which version of the openstack cloud plugin this feature supports as we will be tied to specific versions if upstream changes api."
        },
        {
          "timestamp": 1520028666000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 14."
        },
        {
          "timestamp": 1520028791000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/88/ (1/2)"
        },
        {
          "timestamp": 1520028831000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/260/ (2/2)"
        },
        {
          "timestamp": 1520029039000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 14: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/88/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/88\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/260/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/260"
        },
        {
          "timestamp": 1520029106000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 15."
        },
        {
          "timestamp": 1520029142000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 15: Code-Review+1"
        },
        {
          "timestamp": 1520029242000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/89/ (1/2)"
        },
        {
          "timestamp": 1520029292000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/261/ (2/2)"
        },
        {
          "timestamp": 1520029501000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 15: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/89/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/89\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/261/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/261"
        },
        {
          "timestamp": 1520272719000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 15: Code-Review-1\n\n(1 comment)\n\nWould love to see a JJB parameter (or automated way) for turning this on/off. Something like \u0027jenkins-cfg-clouds: true|false\u0027. This will make this patch not break those who are already using the jenkins-cfg-merge job but have not yet configured cloud information.\n\nAutomated way could be interesting too. Assume if the directory jenkins-config/clouds does not exist then disable the feature. Then we don\u0027t have to introduce a parameter."
        },
        {
          "timestamp": 1520273388000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 15:\n\n(1 comment)"
        },
        {
          "timestamp": 1520277433000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 16."
        },
        {
          "timestamp": 1520277538000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/90/ (1/2)"
        },
        {
          "timestamp": 1520277577000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/262/ (2/2)"
        },
        {
          "timestamp": 1520277742000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 15:\n\n(1 comment)"
        },
        {
          "timestamp": 1520277756000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 16: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/90/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/90\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/262/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/262"
        },
        {
          "timestamp": 1520278644000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 16:\n\n(1 comment)"
        },
        {
          "timestamp": 1520279379000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 17."
        },
        {
          "timestamp": 1520279420000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 16:\n\n(1 comment)"
        },
        {
          "timestamp": 1520279500000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/91/ (1/2)"
        },
        {
          "timestamp": 1520279548000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/263/ (2/2)"
        },
        {
          "timestamp": 1520279820000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 17: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/91/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/91\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/263/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/263"
        },
        {
          "timestamp": 1520283015000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 17: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1520283147000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 18."
        },
        {
          "timestamp": 1520283166000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 17:\n\n(1 comment)"
        },
        {
          "timestamp": 1520283212000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/92/ (1/2)"
        },
        {
          "timestamp": 1520283257000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/264/ (2/2)"
        },
        {
          "timestamp": 1520283499000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 18: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/92/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/92\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/264/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/264"
        },
        {
          "timestamp": 1520284981000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 18: Code-Review+1\n\nAlright tested fully in OpenDaylight. I think this is ready to go."
        },
        {
          "timestamp": 1520329788000,
          "reviewer": ids["fdegir"],
          "message": "Patch Set 18: Code-Review+1\n\nI think it is better someone else +2s this since this is the first time I\u0027m looking at this way of configuring Jenkins itself."
        },
        {
          "timestamp": 1520337137000,
          "reviewer": ids["askb"],
          "message": "Patch Set 18: Code-Review+2"
        },
        {
          "timestamp": 1520383652000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "0150055f447840efeb8902570780cf7a3ec83b06",
          "parents": [
            "c1873360fa7455fdb690c6235923d7eb68e30ec6"
          ],
          "ref": "refs/changes/29/8429/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1516291829000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1516297710000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [
            {
              "file": "jenkins-admin/manage_clouds.groovy",
              "line": 26,
              "reviewer": ids["jluhrsen"],
              "message": "white space!!!!!!!",
              "patchSetTimestamp": 1516291829000
            }
          ],
          "sizeInsertions": 62,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "276660f148de499c7c42c2e99acc62c608c54b12",
          "parents": [
            "7c591a51a893e031eb8ca9eea37774a1dd6410b6"
          ],
          "ref": "refs/changes/29/8429/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518795109000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 166,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "351925d0f9cd4b6d3768b08288fc606d6b7b6be7",
          "parents": [
            "7c591a51a893e031eb8ca9eea37774a1dd6410b6"
          ],
          "ref": "refs/changes/29/8429/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518811640000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "NO_CODE_CHANGE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 166,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "82615693b21b846babae2d9684ed6acd6864c4e4",
          "parents": [
            "7c591a51a893e031eb8ca9eea37774a1dd6410b6"
          ],
          "ref": "refs/changes/29/8429/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518820619000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 177,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "0d8d89664baf5c491f2a89bb3bcf4459d44ff552",
          "parents": [
            "7c591a51a893e031eb8ca9eea37774a1dd6410b6"
          ],
          "ref": "refs/changes/29/8429/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518914695000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 267,
          "sizeDeletions": -3
        },
        {
          "number": 6,
          "revision": "f86eea9163b8b85faadce3b62408d181873a9c46",
          "parents": [
            "022a0b99601fef4a8bd271b79af64e539e5f62dc"
          ],
          "ref": "refs/changes/29/8429/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1519782533000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "TRIVIAL_REBASE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 267,
          "sizeDeletions": -3
        },
        {
          "number": 7,
          "revision": "d847eb5665ee2deb3ca680a8d023aa0e94105396",
          "parents": [
            "0116521b32584814cbd2ad9f1dd84bfbe4fd381b"
          ],
          "ref": "refs/changes/29/8429/7",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1519786782000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 279,
          "sizeDeletions": -23
        },
        {
          "number": 8,
          "revision": "ff250e13184603ab233baa80bd1886da2971308f",
          "parents": [
            "0116521b32584814cbd2ad9f1dd84bfbe4fd381b"
          ],
          "ref": "refs/changes/29/8429/8",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1519848857000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 293,
          "sizeDeletions": -23
        },
        {
          "number": 9,
          "revision": "6abe3cecee83c178f47a3667b9aeca123bf5464a",
          "parents": [
            "0116521b32584814cbd2ad9f1dd84bfbe4fd381b"
          ],
          "ref": "refs/changes/29/8429/9",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1519849164000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 284,
          "sizeDeletions": -23
        },
        {
          "number": 10,
          "revision": "8cb0d1eae64846bca56abaf47c49d30c3591d372",
          "parents": [
            "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
          ],
          "ref": "refs/changes/29/8429/10",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1519951179000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 297,
          "sizeDeletions": -23
        },
        {
          "number": 11,
          "revision": "8c79e108a96b71a07aec4c1c3be4f858a9f8579a",
          "parents": [
            "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
          ],
          "ref": "refs/changes/29/8429/11",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1519951769000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 305,
          "sizeDeletions": -23
        },
        {
          "number": 12,
          "revision": "07f7c237cb002d2716de986cf4a62e47473332cf",
          "parents": [
            "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
          ],
          "ref": "refs/changes/29/8429/12",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1519953957000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 331,
          "sizeDeletions": -23
        },
        {
          "number": 13,
          "revision": "7cb6165fe7ea53316afd269734df2667ae51a693",
          "parents": [
            "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
          ],
          "ref": "refs/changes/29/8429/13",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520027647000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1520028458000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520027909000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 380,
          "sizeDeletions": -16
        },
        {
          "number": 14,
          "revision": "d1b623b1478d3c692e0cf0bd23fccf964dedb551",
          "parents": [
            "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
          ],
          "ref": "refs/changes/29/8429/14",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520028666000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520029039000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 380,
          "sizeDeletions": -16
        },
        {
          "number": 15,
          "revision": "f813b7436f6c4417bc1b99483bea903b2bce4720",
          "parents": [
            "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
          ],
          "ref": "refs/changes/29/8429/15",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520029106000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1520272719000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520029501000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 10,
              "reviewer": ids["zxiiro"],
              "message": "Let\u0027s provide a little more information in the commit message to explain setup and / or if this change requires upgrade attention from consumers.",
              "patchSetTimestamp": 1520029106000
            },
            {
              "file": "shell/jenkins-configure-clouds.sh",
              "line": 31,
              "reviewer": ids["cl778h"],
              "message": "Perhaps set -x ?",
              "patchSetTimestamp": 1520029106000
            },
            {
              "file": "shell/jenkins-configure-clouds.sh",
              "line": 31,
              "reviewer": ids["zxiiro"],
              "message": "Gave this a try but because of the nested loops in this file it absolutely spams the logs. I think a more precise `set -x`s or echos would be more useful in this file.\n\nAnother idea I\u0027ve been floating around is standardizing on a \"DEBUG_JOB\u003dtrue|false\" parameter for all scripts which will enable -x if the user checks the box at build time. This will allow us to easily turn it on / off.",
              "patchSetTimestamp": 1520029106000
            }
          ],
          "sizeInsertions": 383,
          "sizeDeletions": -16
        },
        {
          "number": 16,
          "revision": "9e954a95c65b2975d0b69e20b05c76db72a90fa1",
          "parents": [
            "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
          ],
          "ref": "refs/changes/29/8429/16",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520277433000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520277756000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 248,
              "reviewer": ids["zxiiro"],
              "message": "Probably should mention that troubleshooting logs are available in the groovy-inserts directory on the log server.",
              "patchSetTimestamp": 1520277433000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 248,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1520277433000
            }
          ],
          "sizeInsertions": 387,
          "sizeDeletions": -16
        },
        {
          "number": 17,
          "revision": "ab6f0b8b7680762c3db8e8751799c5bf8ff03208",
          "parents": [
            "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
          ],
          "ref": "refs/changes/29/8429/17",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520279379000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1520283015000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520279820000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/jenkins-configure-clouds.sh",
              "line": 133,
              "reviewer": ids["zxiiro"],
              "message": "INSTANCE_CAP_SANDBOX is too similar a name to INSTANCE_CAP that the grep will pick up the 2nd declaration. Need a different unique word like:\n\nSANDBOX_CAP",
              "patchSetTimestamp": 1520279379000
            },
            {
              "file": "shell/jenkins-configure-clouds.sh",
              "line": 133,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1520279379000
            }
          ],
          "sizeInsertions": 396,
          "sizeDeletions": -16
        },
        {
          "number": 18,
          "revision": "c26afec952891def4ae050c4a9d9d3a13dedd149",
          "parents": [
            "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
          ],
          "ref": "refs/changes/29/8429/18",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1520283147000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1520284981000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1520383652000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1520337137000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1520283499000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1520329788000,
              "grantedBy": ids["fdegir"]
            }
          ],
          "comments": [],
          "sizeInsertions": 398,
          "sizeDeletions": -16
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iec76e4c42d9e0132571af477f3ae770e5e360781",
      "commitNumber": 8859,
      "subject": "Git submodule update after fetching patch",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8859",
      "commitMessage": "Git submodule update after fetching patch\n\nFor projects that have submodules we need to call\n`git submodule update` after fetching the patch so that\nsubmodule updates caused by the patch are pulled in.\n\nRunning that command on a repo that does not contain submodules\nreturns cleanly as a noop.\n\nChange-Id: Iec76e4c42d9e0132571af477f3ae770e5e360781\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1518642885000,
      "lastUpdatedDate": 1518644542000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["lf-jenkins"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1518642885000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1518643124000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/250/"
        },
        {
          "timestamp": 1518643241000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1518643357000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/250/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/250"
        },
        {
          "timestamp": 1518644540000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1518644542000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "a0ea4aa6051fb9d2d54e7e3fab0cf1f52c7f496a",
          "parents": [
            "f372e4b60011bbcad7ecebca82a24144b42fe19f"
          ],
          "ref": "refs/changes/59/8859/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518642885000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1518644540000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1518644542000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518643357000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1518643241000,
              "grantedBy": ids["cl778h"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I6acf020cda29198ad930ceeffe08e09ad0c7d6bd",
      "commitNumber": 8786,
      "subject": "Release global-jjb v0.16.0",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8786",
      "commitMessage": "Release global-jjb v0.16.0\n\nChange-Id: I6acf020cda29198ad930ceeffe08e09ad0c7d6bd\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1518204346000,
      "lastUpdatedDate": 1518478434000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["jwagantall"],
        ids["cl778h"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1518204346000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1518204437000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nRelease scheduled for Monday. I\u0027d really like to get I7d134950b25d469686cace2f79fd8c297727166c in before then. I\u0027ll take another look on Monday before deciding."
        },
        {
          "timestamp": 1518204572000,
          "reviewer": ids["jwagantall"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1518205263000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1: Code-Review-1\n\n(3 comments)\n\nwould you please fix doc wording?  One seems like it was mine, sorry about that."
        },
        {
          "timestamp": 1518205486000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(3 comments)\n\nThanks! Appreciate the review."
        },
        {
          "timestamp": 1518205497000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1518205617000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 2: Code-Review+1"
        },
        {
          "timestamp": 1518451497000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1518451620000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/247/ (1/2)"
        },
        {
          "timestamp": 1518451662000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/81/ (2/2)"
        },
        {
          "timestamp": 1518451873000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/247/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/247\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/81/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/81"
        },
        {
          "timestamp": 1518478429000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1518478434000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "109ef782f0554df0c1f2163c986b38f0c50139dd",
          "parents": [
            "757650c835599c0aa4fe62ed99f05eab324c6f37"
          ],
          "ref": "refs/changes/86/8786/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518204346000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1518204572000,
              "grantedBy": ids["jwagantall"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1518205263000,
              "grantedBy": ids["cl778h"]
            }
          ],
          "comments": [
            {
              "file": "relnotes/v0.16.0.txt",
              "line": 33,
              "reviewer": ids["cl778h"],
              "message": "minor typo, should be \"overridden\"",
              "patchSetTimestamp": 1518204346000
            },
            {
              "file": "relnotes/v0.16.0.txt",
              "line": 33,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1518204346000
            },
            {
              "file": "relnotes/v0.16.0.txt",
              "line": 34,
              "reviewer": ids["cl778h"],
              "message": "should this say \"{mvn-goals}\" parameter instead for clarity?",
              "patchSetTimestamp": 1518204346000
            },
            {
              "file": "relnotes/v0.16.0.txt",
              "line": 34,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1518204346000
            },
            {
              "file": "relnotes/v0.16.0.txt",
              "line": 41,
              "reviewer": ids["cl778h"],
              "message": "second occurrence: should be \"overridden\"",
              "patchSetTimestamp": 1518204346000
            },
            {
              "file": "relnotes/v0.16.0.txt",
              "line": 41,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1518204346000
            }
          ],
          "sizeInsertions": 68,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "d63517dc7cb63a820e7731d9eded362f13b47e77",
          "parents": [
            "757650c835599c0aa4fe62ed99f05eab324c6f37"
          ],
          "ref": "refs/changes/86/8786/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518205497000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1518205617000,
              "grantedBy": ids["cl778h"]
            }
          ],
          "comments": [],
          "sizeInsertions": 68,
          "sizeDeletions": -1
        },
        {
          "number": 3,
          "revision": "8e33e6ab798cd57a383cb8871d973de3fce6340c",
          "parents": [
            "1d1aaf33f079ee4f51dfce68e8f5592a649947ca"
          ],
          "ref": "refs/changes/86/8786/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518451497000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1518478429000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1518478434000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518451873000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 93,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I7d134950b25d469686cace2f79fd8c297727166c",
      "commitNumber": 8434,
      "subject": "Create job to manage Jenkins Global Variables",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8434",
      "commitMessage": "Create job to manage Jenkins Global Variables\n\nParses a configuration file containing variable listings in the form\n\"KEY\u003dvalue\" one per line and creates the appropriate groovy\nscript to push these environment variables to Jenkins Global Config.\n\nConfiguration file is stored in\nci-management/jenkins-config/global-vars-SILO.sh\n\n(Where silo is production | sandbox)\n\nWhile JJB provided us a way to store job configuration in a git repo\nwe have never had a good way to manage global Jenkins configuration.\nThis patch enables us to manage one aspect, Global Environment\nvariables in the ci-management repository.\n\nIssue: RELENG-753\nChange-Id: I7d134950b25d469686cace2f79fd8c297727166c\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1516321577000,
      "lastUpdatedDate": 1518450858000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1516321577000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1518062029000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1518066002000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1518066033000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nSuccessfully tested with https://logs.opendaylight.org/sandbox/vex-yul-odl-jenkins-2/builder-jenkins-cfg-merge/19/"
        },
        {
          "timestamp": 1518066127000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/238/ (1/2)"
        },
        {
          "timestamp": 1518066175000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/75/ (2/2)"
        },
        {
          "timestamp": 1518066311000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/238/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/238/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/238\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/75/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/75"
        },
        {
          "timestamp": 1518066705000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1518066803000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/239/ (1/2)"
        },
        {
          "timestamp": 1518066854000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/76/ (2/2)"
        },
        {
          "timestamp": 1518066992000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/239/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/239\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/76/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/76"
        },
        {
          "timestamp": 1518145719000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1518145842000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/243/ (1/2)"
        },
        {
          "timestamp": 1518145878000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/77/ (2/2)"
        },
        {
          "timestamp": 1518146056000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/243/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/243\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/77/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/77"
        },
        {
          "timestamp": 1518146172000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5: Code-Review-1\n\n(3 comments)"
        },
        {
          "timestamp": 1518147448000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1518147566000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/244/ (1/2)"
        },
        {
          "timestamp": 1518147613000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/78/ (2/2)"
        },
        {
          "timestamp": 1518147738000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/244/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/244\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/78/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/78"
        },
        {
          "timestamp": 1518147757000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 6: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1518148001000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1518148107000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/245/ (1/2)"
        },
        {
          "timestamp": 1518148147000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/79/ (2/2)"
        },
        {
          "timestamp": 1518148326000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/245/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/245\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/79/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/79"
        },
        {
          "timestamp": 1518182253000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 7:\n\nWill every project with a ci-management/jjb area need to gain a jenkins-config/ subdirectory for this to succeed?"
        },
        {
          "timestamp": 1518184611000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n\u003e Will every project with a ci-management/jjb area need to gain a\n \u003e jenkins-config/ subdirectory for this to succeed?\n\nYes this will cause all projects to require a jenkins-config directory with a global-vars file defined for \u0027production\u0027 and \u0027sandbox\u0027 systems. (Unless they decide to exclude the job). This provides a very visible feature for the projects though so I don\u0027t really expect folks will want to do that and LF staff will need to fill out the initial details."
        },
        {
          "timestamp": 1518184696000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1518449793000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n(1 comment)"
        },
        {
          "timestamp": 1518449914000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1518450117000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/246/ (1/2)"
        },
        {
          "timestamp": 1518450185000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/80/ (2/2)"
        },
        {
          "timestamp": 1518450801000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/246/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/246\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/80/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/80"
        },
        {
          "timestamp": 1518450841000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8: Code-Review+2\n\nSuccessfully tested latest patch on Sandbox.\nhttps://logs.opendaylight.org/sandbox/vex-yul-odl-jenkins-2/builder-jenkins-cfg-merge/2/\n\nGoing to merge to get this into global-jjb v0.16.0 today."
        },
        {
          "timestamp": 1518450858000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "778507859a47e2536d83ae8a709bfec21b70b3f9",
          "parents": [
            "c1873360fa7455fdb690c6235923d7eb68e30ec6"
          ],
          "ref": "refs/changes/34/8434/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1516321577000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 153,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "127c4ef9f25fd72c9f8a72c3cb463082f1960376",
          "parents": [
            "b804ed77372c30845bdd360f4baa52de98028a30"
          ],
          "ref": "refs/changes/34/8434/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518062029000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 165,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "9ef0e2fcf3aa4280f6ecffbece09539ace36476f",
          "parents": [
            "b804ed77372c30845bdd360f4baa52de98028a30"
          ],
          "ref": "refs/changes/34/8434/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518066002000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1518066311000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 225,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "6eaf52ff75162bfd80d2511e13d31ab69662d3d0",
          "parents": [
            "b804ed77372c30845bdd360f4baa52de98028a30"
          ],
          "ref": "refs/changes/34/8434/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518066705000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518066992000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 227,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "9e16156cb489a8ba3fa3da8bc9c15c4ad30f23b4",
          "parents": [
            "c4295ab63bdbbceb6647b86ae27732364c2bce26"
          ],
          "ref": "refs/changes/34/8434/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518145719000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1518146172000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518146056000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": ".jjb-test/lf-ci-jobs.yaml",
              "line": 9,
              "reviewer": ids["zxiiro"],
              "message": "Not sure we need this the job should define a default.",
              "patchSetTimestamp": 1518145719000
            },
            {
              "file": ".jjb-test/lf-ci-jobs.yaml",
              "line": 17,
              "reviewer": ids["zxiiro"],
              "message": "same here.",
              "patchSetTimestamp": 1518145719000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 274,
              "reviewer": ids["zxiiro"],
              "message": "need a default branch defined.",
              "patchSetTimestamp": 1518145719000
            }
          ],
          "sizeInsertions": 227,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "713cd5f10d1d67d62fd8c6b28ac03b327d8c427b",
          "parents": [
            "c4295ab63bdbbceb6647b86ae27732364c2bce26"
          ],
          "ref": "refs/changes/34/8434/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518147448000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1518147757000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518147738000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 10,
              "reviewer": ids["zxiiro"],
              "message": "Should document that this script requires lftools to be preinstalled to /tmp/v/lftools.",
              "patchSetTimestamp": 1518147448000
            },
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 15,
              "reviewer": ids["zxiiro"],
              "message": "Don\u0027t need this line of code as this script is already assuming that this directory exists. Plus if it didn\u0027t we made not effort to actually install lftools after this...",
              "patchSetTimestamp": 1518147448000
            }
          ],
          "sizeInsertions": 257,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "3e3cae6c6a31cad29eb214112feb3d3bcdde9174",
          "parents": [
            "c4295ab63bdbbceb6647b86ae27732364c2bce26"
          ],
          "ref": "refs/changes/34/8434/7",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518148001000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1518184696000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518148326000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 50,
              "reviewer": ids["zxiiro"],
              "message": "Need to check if a user puts a space in the file will it be ignored or cause this to fail?\n\n\nAlso we should support comments (lines starting with #) as I suspect folks may want to add comments to the file.",
              "patchSetTimestamp": 1518148001000
            },
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 50,
              "reviewer": ids["zxiiro"],
              "message": "if [[ $var \u003d\u003d \u0027#\u0027* ]] || [ -z \"$var\" ]; then\n        continue\n    fi",
              "patchSetTimestamp": 1518148001000
            }
          ],
          "sizeInsertions": 264,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "1d1aaf33f079ee4f51dfce68e8f5592a649947ca",
          "parents": [
            "757650c835599c0aa4fe62ed99f05eab324c6f37"
          ],
          "ref": "refs/changes/34/8434/8",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518449914000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1518450841000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1518450858000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518450801000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 269,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iaf9a9ef695229fa24dfc639ca60a4b9a9928a234",
      "commitNumber": 8688,
      "subject": "Add test to check for double curly braces",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8688",
      "commitMessage": "Add test to check for double curly braces\n\nThis will cause the build to fail if double curly braces are in\nJJB output XML. This should help catch the JJB bug that adds\ncurly braces when using !include-raw-escape.\n\nIssue: RELENG-777\nChange-Id: Iaf9a9ef695229fa24dfc639ca60a4b9a9928a234\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1517935081000,
      "lastUpdatedDate": 1517936020000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1517935081000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1517935279000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1517935311000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/235/"
        },
        {
          "timestamp": 1517935839000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/235/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/235"
        },
        {
          "timestamp": 1517936019000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1517936020000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "8ec975845840601c3b2a1015bf56a25ad9532234",
          "parents": [
            "be559eba3d91bcf9e0eebe1199843cb918fa1b49"
          ],
          "ref": "refs/changes/88/8688/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1517935081000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1517936019000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1517936020000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1517935839000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1517935279000,
              "grantedBy": ids["cl778h"]
            }
          ],
          "comments": [],
          "sizeInsertions": 10,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I8cabbac997d165bfe8b68d76b78cdb4bb7cc4bbc",
      "commitNumber": 8438,
      "subject": "Allow goal override for maven-build macro",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8438",
      "commitMessage": "Allow goal override for maven-build macro\n\nSplits out the maven-build into a macro that can be used\nto allow projects to override the default goals if they\nwish to tweak them for their projects.\n\nChange-Id: I8cabbac997d165bfe8b68d76b78cdb4bb7cc4bbc\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1516325391000,
      "lastUpdatedDate": 1517536437000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["cl778h"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1516325391000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1516325427000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nStill need to actually test this and this requires the 2 other patches it depends on."
        },
        {
          "timestamp": 1517248529000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1517533348000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1517534697000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1517534809000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/224/ (1/2)"
        },
        {
          "timestamp": 1517534840000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/71/ (2/2)"
        },
        {
          "timestamp": 1517535045000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/224/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/224\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/71/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/71"
        },
        {
          "timestamp": 1517536436000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nI think this is good to go."
        },
        {
          "timestamp": 1517536437000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "a73e24ad53fa0ef8100d9fd3ce9f75cf5be6ffd4",
          "parents": [
            "ba6315ba37da3d3a0ea15c58cd4e6a4aff488826"
          ],
          "ref": "refs/changes/38/8438/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1516325391000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1517248529000,
              "grantedBy": ids["cl778h"]
            }
          ],
          "comments": [],
          "sizeInsertions": 32,
          "sizeDeletions": -10
        },
        {
          "number": 2,
          "revision": "d22c3fe8f7bc3f3276dedd7448c4f82f50fe7584",
          "parents": [
            "76a760c1a39a38def2b9c5642645abf5abde83f3"
          ],
          "ref": "refs/changes/38/8438/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1517533348000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1517534697000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1517536437000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1517535045000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 32,
          "sizeDeletions": -10
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I9edfee2f7d2415117d854ad7cdba280cc9751004",
      "commitNumber": 8430,
      "subject": "Improve verbosity in maven shell scripts",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8430",
      "commitMessage": "Improve verbosity in maven shell scripts\n\nThere is no harm in enabling debug level verbosity for these scripts\nand may help in improving troubleshooting.\n\nChange-Id: I9edfee2f7d2415117d854ad7cdba280cc9751004\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1516303283000,
      "lastUpdatedDate": 1516323756000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1516303283000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1516303491000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/189/"
        },
        {
          "timestamp": 1516303686000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/189/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/189"
        },
        {
          "timestamp": 1516309622000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1: Code-Review+1\n\nThanks this will really help in understanding job results."
        },
        {
          "timestamp": 1516323755000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1516323756000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "5fa5b9907684b63824352a353d31365e95cfbca3",
          "parents": [
            "c1873360fa7455fdb690c6235923d7eb68e30ec6"
          ],
          "ref": "refs/changes/30/8430/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1516303283000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1516323755000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1516323756000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1516303686000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1516309622000,
              "grantedBy": ids["cl778h"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": -5
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I577a57417d0c56f403e66b9fb7201bf58fef818e",
      "commitNumber": 8431,
      "subject": "Use clean install for Sonar",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8431",
      "commitMessage": "Use clean install for Sonar\n\nThe Sonar job does not need to deploy so switch to using\n`mvn clean install` to build the project before running\nsonar scan.\n\nChange-Id: I577a57417d0c56f403e66b9fb7201bf58fef818e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1516303402000,
      "lastUpdatedDate": 1516323742000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1516303402000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1516303522000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/190/"
        },
        {
          "timestamp": 1516303688000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/190/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/190"
        },
        {
          "timestamp": 1516309560000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 1: Code-Review+1\n\nWould you consider testing the solution offered below of \"mvn clean package sonar:sonar\" ?\n\nhttps://stackoverflow.com/questions/31024392/what-maven-goal-is-required-to-run-maven-sonar-analysis"
        },
        {
          "timestamp": 1516309977000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n`package` won\u0027t work for us as we need at minimal \"install\" to ensure that packages make it into the local m2 repository so that Karaf projects can install jars from there during their unit tests runs. Using the `package` goal would make Karaf not able to find it\u0027s dependencies."
        },
        {
          "timestamp": 1516323734000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1516323742000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4d253dda82fd56f3e016fc0059e10d201e253db5",
          "parents": [
            "c1873360fa7455fdb690c6235923d7eb68e30ec6"
          ],
          "ref": "refs/changes/31/8431/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1516303402000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1516323734000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1516323742000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1516303688000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1516309560000,
              "grantedBy": ids["cl778h"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -3
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 16,
        "approvalCount": 7,
        "commentCount": 4,
        "approvals": {
          "-1": 1,
          "1": 6
        }
      }
    },
    {
      "identity": ids["jeremyphelps"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 1,
        "approvals": {
          "-1": 1
        }
      }
    }
  ],
  "commentsWritten": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I6acf020cda29198ad930ceeffe08e09ad0c7d6bd",
        "commitNumber": 8786,
        "subject": "Release global-jjb v0.16.0",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/8786",
        "commitMessage": "Release global-jjb v0.16.0\n\nChange-Id: I6acf020cda29198ad930ceeffe08e09ad0c7d6bd\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1518204346000,
        "lastUpdatedDate": 1518478434000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["jwagantall"],
          ids["cl778h"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1518204346000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1518204437000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\nRelease scheduled for Monday. I\u0027d really like to get I7d134950b25d469686cace2f79fd8c297727166c in before then. I\u0027ll take another look on Monday before deciding."
          },
          {
            "timestamp": 1518204572000,
            "reviewer": ids["jwagantall"],
            "message": "Patch Set 1: Code-Review+1"
          },
          {
            "timestamp": 1518205263000,
            "reviewer": ids["cl778h"],
            "message": "Patch Set 1: Code-Review-1\n\n(3 comments)\n\nwould you please fix doc wording?  One seems like it was mine, sorry about that."
          },
          {
            "timestamp": 1518205486000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(3 comments)\n\nThanks! Appreciate the review."
          },
          {
            "timestamp": 1518205497000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1518205617000,
            "reviewer": ids["cl778h"],
            "message": "Patch Set 2: Code-Review+1"
          },
          {
            "timestamp": 1518451497000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1518451620000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/247/ (1/2)"
          },
          {
            "timestamp": 1518451662000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/81/ (2/2)"
          },
          {
            "timestamp": 1518451873000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/247/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/247\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/81/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/81"
          },
          {
            "timestamp": 1518478429000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3: Code-Review+2"
          },
          {
            "timestamp": 1518478434000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "109ef782f0554df0c1f2163c986b38f0c50139dd",
            "parents": [
              "757650c835599c0aa4fe62ed99f05eab324c6f37"
            ],
            "ref": "refs/changes/86/8786/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1518204346000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1518204572000,
                "grantedBy": ids["jwagantall"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1518205263000,
                "grantedBy": ids["cl778h"]
              }
            ],
            "comments": [
              {
                "file": "relnotes/v0.16.0.txt",
                "line": 33,
                "reviewer": ids["cl778h"],
                "message": "minor typo, should be \"overridden\"",
                "patchSetTimestamp": 1518204346000
              },
              {
                "file": "relnotes/v0.16.0.txt",
                "line": 33,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1518204346000
              },
              {
                "file": "relnotes/v0.16.0.txt",
                "line": 34,
                "reviewer": ids["cl778h"],
                "message": "should this say \"{mvn-goals}\" parameter instead for clarity?",
                "patchSetTimestamp": 1518204346000
              },
              {
                "file": "relnotes/v0.16.0.txt",
                "line": 34,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1518204346000
              },
              {
                "file": "relnotes/v0.16.0.txt",
                "line": 41,
                "reviewer": ids["cl778h"],
                "message": "second occurrence: should be \"overridden\"",
                "patchSetTimestamp": 1518204346000
              },
              {
                "file": "relnotes/v0.16.0.txt",
                "line": 41,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1518204346000
              }
            ],
            "sizeInsertions": 68,
            "sizeDeletions": -1
          },
          {
            "number": 2,
            "revision": "d63517dc7cb63a820e7731d9eded362f13b47e77",
            "parents": [
              "757650c835599c0aa4fe62ed99f05eab324c6f37"
            ],
            "ref": "refs/changes/86/8786/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1518205497000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1518205617000,
                "grantedBy": ids["cl778h"]
              }
            ],
            "comments": [],
            "sizeInsertions": 68,
            "sizeDeletions": -1
          },
          {
            "number": 3,
            "revision": "8e33e6ab798cd57a383cb8871d973de3fce6340c",
            "parents": [
              "1d1aaf33f079ee4f51dfce68e8f5592a649947ca"
            ],
            "ref": "refs/changes/86/8786/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1518451497000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1518478429000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1518478434000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1518451873000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 93,
            "sizeDeletions": -1
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "relnotes/v0.16.0.txt",
          "line": 33,
          "reviewer": ids["cl778h"],
          "message": "minor typo, should be \"overridden\"",
          "patchSetTimestamp": 1518204346000
        },
        {
          "file": "relnotes/v0.16.0.txt",
          "line": 34,
          "reviewer": ids["cl778h"],
          "message": "should this say \"{mvn-goals}\" parameter instead for clarity?",
          "patchSetTimestamp": 1518204346000
        },
        {
          "file": "relnotes/v0.16.0.txt",
          "line": 41,
          "reviewer": ids["cl778h"],
          "message": "second occurrence: should be \"overridden\"",
          "patchSetTimestamp": 1518204346000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "Id13aee7244cce6328fd10cbe495b5fb3e7069924",
        "commitNumber": 9720,
        "subject": "Pin tox to \u003c3.0.0 as it breaks detox",
        "owner": ids["jeremyphelps"],
        "url": "https://gerrit.linuxfoundation.org/infra/9720",
        "commitMessage": "Pin tox to \u003c3.0.0 as it breaks detox\n\nIssue-ID: RELENG-856\nChange-Id: Id13aee7244cce6328fd10cbe495b5fb3e7069924\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
        "createdOnDate": 1522762911000,
        "lastUpdatedDate": 1522765701000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["jeremyphelps"],
          ids["lf-jenkins"],
          ids["cl778h"]
        ],
        "comments": [
          {
            "timestamp": 1522762911000,
            "reviewer": ids["jeremyphelps"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1522762958000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review+2"
          },
          {
            "timestamp": 1522763157000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/312/"
          },
          {
            "timestamp": 1522763301000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/312/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/312/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/312"
          },
          {
            "timestamp": 1522763664000,
            "reviewer": ids["cl778h"],
            "message": "Patch Set 1: Code-Review+1\n\n(1 comment)"
          },
          {
            "timestamp": 1522763847000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 1:\n\nrecheck"
          },
          {
            "timestamp": 1522763897000,
            "reviewer": ids["cl778h"],
            "message": "Patch Set 1:\n\nThis fails with the same proclimit-not-found error as everywhere else.  Suspect you\u0027ll have to +1 verify manually.  :/"
          },
          {
            "timestamp": 1522763965000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 1:\n\n\u003e (1 comment)\n\nAgreed, we will look at those next."
          },
          {
            "timestamp": 1522763991000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 1:\n\n\u003e This fails with the same proclimit-not-found error as everywhere\n \u003e else.  Suspect you\u0027ll have to +1 verify manually.  :/\n\nI updated the verify job, our gerrit does not allow an override."
          },
          {
            "timestamp": 1522764035000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/313/"
          },
          {
            "timestamp": 1522764260000,
            "reviewer": ids["cl778h"],
            "message": "Patch Set 1: Code-Review-1\n\nSuggest adding this to commit message:\n\nIssue-ID: RELENG-856"
          },
          {
            "timestamp": 1522764331000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/313/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/313"
          },
          {
            "timestamp": 1522764440000,
            "reviewer": ids["jeremyphelps"],
            "message": "Uploaded patch set 2: Commit message was updated."
          },
          {
            "timestamp": 1522764454000,
            "reviewer": ids["jeremyphelps"],
            "message": "Patch Set 2:\n\n\u003e Suggest adding this to commit message:\n \u003e \n \u003e Issue-ID: RELENG-856\n\nDone"
          },
          {
            "timestamp": 1522764690000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/314/"
          },
          {
            "timestamp": 1522765124000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/314/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/314"
          },
          {
            "timestamp": 1522765691000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review+2"
          },
          {
            "timestamp": 1522765701000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "388edb2d36117dabcb4b02f11e54b727731f361b",
            "parents": [
              "2fd4ef3727651924618efac74b88e104c858ead2"
            ],
            "ref": "refs/changes/20/9720/1",
            "uploader": ids["jeremyphelps"],
            "createdOnDate": 1522762911000,
            "author": ids["jeremyphelps"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1522762958000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1522764331000,
                "grantedBy": ids["lf-jenkins"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1522764260000,
                "grantedBy": ids["cl778h"]
              }
            ],
            "comments": [
              {
                "file": "shell/tox-install.sh",
                "line": 22,
                "reviewer": ids["cl778h"],
                "message": "Perhaps it would be wise to pin all the tools here, not just tox?  Anyone can break us anytime.",
                "patchSetTimestamp": 1522762911000
              }
            ],
            "sizeInsertions": 1,
            "sizeDeletions": -1
          },
          {
            "number": 2,
            "revision": "edf56a1e9ce91d936388621ecfc850162aabfebd",
            "parents": [
              "2fd4ef3727651924618efac74b88e104c858ead2"
            ],
            "ref": "refs/changes/20/9720/2",
            "uploader": ids["jeremyphelps"],
            "createdOnDate": 1522764440000,
            "author": ids["jeremyphelps"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1522765691000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1522765701000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1522765124000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 1,
            "sizeDeletions": -1
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "shell/tox-install.sh",
          "line": 22,
          "reviewer": ids["cl778h"],
          "message": "Perhaps it would be wise to pin all the tools here, not just tox?  Anyone can break us anytime.",
          "patchSetTimestamp": 1522762911000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "Idad3078942618b7d8fd08a40bf9e4e5ed5a0dc48",
        "commitNumber": 8429,
        "subject": "Add script to manage Jenkins cloud cfg",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/8429",
        "commitMessage": "Add script to manage Jenkins cloud cfg\n\nA groovy script to manage the Jenkins global cloud cfg\nprogrammatically. This script reads configuration from\nthe directory jenkins-config/clouds to configure cloud\nconfiguration in Jenkins. Refer to the documentation for\ndetails.\n\nNo upgrade consideration is necessary as this script\nautomatically detects the absence of the jenkins-config/clouds\ndirectory and disables the Cloud configuration.\n\nIssue: RELENG-804\nChange-Id: Idad3078942618b7d8fd08a40bf9e4e5ed5a0dc48\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
        "createdOnDate": 1516291829000,
        "lastUpdatedDate": 1520383652000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["jluhrsen"],
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["cl778h"],
          ids["fdegir"],
          ids["askb"]
        ],
        "comments": [
          {
            "timestamp": 1516291829000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1516297710000,
            "reviewer": ids["jluhrsen"],
            "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1518795109000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1518811640000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 3: Commit message was updated."
          },
          {
            "timestamp": 1518820619000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1518914695000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1519782533000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 6: Patch Set 5 was rebased."
          },
          {
            "timestamp": 1519786782000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 7."
          },
          {
            "timestamp": 1519848857000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 8."
          },
          {
            "timestamp": 1519849164000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 9."
          },
          {
            "timestamp": 1519951179000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 10."
          },
          {
            "timestamp": 1519951769000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 11."
          },
          {
            "timestamp": 1519953957000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 12."
          },
          {
            "timestamp": 1520027647000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 13."
          },
          {
            "timestamp": 1520027724000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/87/ (1/2)"
          },
          {
            "timestamp": 1520027759000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/259/ (2/2)"
          },
          {
            "timestamp": 1520027909000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 13: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/87/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/87\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/259/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/259"
          },
          {
            "timestamp": 1520028458000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 13: Code-Review+1\n\nReady to go. Been testing in the sandbox and it\u0027s went well.\n\nhttps://jenkins.opendaylight.org/sandbox/job/builder-jenkins-cfg-merge/"
          },
          {
            "timestamp": 1520028541000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 13:\n\nShould probably mention which version of the openstack cloud plugin this feature supports as we will be tied to specific versions if upstream changes api."
          },
          {
            "timestamp": 1520028666000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 14."
          },
          {
            "timestamp": 1520028791000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/88/ (1/2)"
          },
          {
            "timestamp": 1520028831000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 14:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/260/ (2/2)"
          },
          {
            "timestamp": 1520029039000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 14: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/88/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/88\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/260/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/260"
          },
          {
            "timestamp": 1520029106000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 15."
          },
          {
            "timestamp": 1520029142000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 15: Code-Review+1"
          },
          {
            "timestamp": 1520029242000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/89/ (1/2)"
          },
          {
            "timestamp": 1520029292000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 15:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/261/ (2/2)"
          },
          {
            "timestamp": 1520029501000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 15: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/89/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/89\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/261/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/261"
          },
          {
            "timestamp": 1520272719000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 15: Code-Review-1\n\n(1 comment)\n\nWould love to see a JJB parameter (or automated way) for turning this on/off. Something like \u0027jenkins-cfg-clouds: true|false\u0027. This will make this patch not break those who are already using the jenkins-cfg-merge job but have not yet configured cloud information.\n\nAutomated way could be interesting too. Assume if the directory jenkins-config/clouds does not exist then disable the feature. Then we don\u0027t have to introduce a parameter."
          },
          {
            "timestamp": 1520273388000,
            "reviewer": ids["cl778h"],
            "message": "Patch Set 15:\n\n(1 comment)"
          },
          {
            "timestamp": 1520277433000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 16."
          },
          {
            "timestamp": 1520277538000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/90/ (1/2)"
          },
          {
            "timestamp": 1520277577000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 16:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/262/ (2/2)"
          },
          {
            "timestamp": 1520277742000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 15:\n\n(1 comment)"
          },
          {
            "timestamp": 1520277756000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 16: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/90/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/90\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/262/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/262"
          },
          {
            "timestamp": 1520278644000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 16:\n\n(1 comment)"
          },
          {
            "timestamp": 1520279379000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 17."
          },
          {
            "timestamp": 1520279420000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 16:\n\n(1 comment)"
          },
          {
            "timestamp": 1520279500000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/91/ (1/2)"
          },
          {
            "timestamp": 1520279548000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/263/ (2/2)"
          },
          {
            "timestamp": 1520279820000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 17: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/91/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/91\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/263/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/263"
          },
          {
            "timestamp": 1520283015000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 17: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1520283147000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 18."
          },
          {
            "timestamp": 1520283166000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 17:\n\n(1 comment)"
          },
          {
            "timestamp": 1520283212000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/92/ (1/2)"
          },
          {
            "timestamp": 1520283257000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/264/ (2/2)"
          },
          {
            "timestamp": 1520283499000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 18: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/92/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/92\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/264/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/264"
          },
          {
            "timestamp": 1520284981000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 18: Code-Review+1\n\nAlright tested fully in OpenDaylight. I think this is ready to go."
          },
          {
            "timestamp": 1520329788000,
            "reviewer": ids["fdegir"],
            "message": "Patch Set 18: Code-Review+1\n\nI think it is better someone else +2s this since this is the first time I\u0027m looking at this way of configuring Jenkins itself."
          },
          {
            "timestamp": 1520337137000,
            "reviewer": ids["askb"],
            "message": "Patch Set 18: Code-Review+2"
          },
          {
            "timestamp": 1520383652000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "0150055f447840efeb8902570780cf7a3ec83b06",
            "parents": [
              "c1873360fa7455fdb690c6235923d7eb68e30ec6"
            ],
            "ref": "refs/changes/29/8429/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1516291829000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1516297710000,
                "grantedBy": ids["jluhrsen"]
              }
            ],
            "comments": [
              {
                "file": "jenkins-admin/manage_clouds.groovy",
                "line": 26,
                "reviewer": ids["jluhrsen"],
                "message": "white space!!!!!!!",
                "patchSetTimestamp": 1516291829000
              }
            ],
            "sizeInsertions": 62,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "276660f148de499c7c42c2e99acc62c608c54b12",
            "parents": [
              "7c591a51a893e031eb8ca9eea37774a1dd6410b6"
            ],
            "ref": "refs/changes/29/8429/2",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1518795109000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 166,
            "sizeDeletions": 0
          },
          {
            "number": 3,
            "revision": "351925d0f9cd4b6d3768b08288fc606d6b7b6be7",
            "parents": [
              "7c591a51a893e031eb8ca9eea37774a1dd6410b6"
            ],
            "ref": "refs/changes/29/8429/3",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1518811640000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "NO_CODE_CHANGE",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 166,
            "sizeDeletions": 0
          },
          {
            "number": 4,
            "revision": "82615693b21b846babae2d9684ed6acd6864c4e4",
            "parents": [
              "7c591a51a893e031eb8ca9eea37774a1dd6410b6"
            ],
            "ref": "refs/changes/29/8429/4",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1518820619000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 177,
            "sizeDeletions": 0
          },
          {
            "number": 5,
            "revision": "0d8d89664baf5c491f2a89bb3bcf4459d44ff552",
            "parents": [
              "7c591a51a893e031eb8ca9eea37774a1dd6410b6"
            ],
            "ref": "refs/changes/29/8429/5",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1518914695000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 267,
            "sizeDeletions": -3
          },
          {
            "number": 6,
            "revision": "f86eea9163b8b85faadce3b62408d181873a9c46",
            "parents": [
              "022a0b99601fef4a8bd271b79af64e539e5f62dc"
            ],
            "ref": "refs/changes/29/8429/6",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1519782533000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "TRIVIAL_REBASE",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 267,
            "sizeDeletions": -3
          },
          {
            "number": 7,
            "revision": "d847eb5665ee2deb3ca680a8d023aa0e94105396",
            "parents": [
              "0116521b32584814cbd2ad9f1dd84bfbe4fd381b"
            ],
            "ref": "refs/changes/29/8429/7",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1519786782000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 279,
            "sizeDeletions": -23
          },
          {
            "number": 8,
            "revision": "ff250e13184603ab233baa80bd1886da2971308f",
            "parents": [
              "0116521b32584814cbd2ad9f1dd84bfbe4fd381b"
            ],
            "ref": "refs/changes/29/8429/8",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1519848857000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 293,
            "sizeDeletions": -23
          },
          {
            "number": 9,
            "revision": "6abe3cecee83c178f47a3667b9aeca123bf5464a",
            "parents": [
              "0116521b32584814cbd2ad9f1dd84bfbe4fd381b"
            ],
            "ref": "refs/changes/29/8429/9",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1519849164000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 284,
            "sizeDeletions": -23
          },
          {
            "number": 10,
            "revision": "8cb0d1eae64846bca56abaf47c49d30c3591d372",
            "parents": [
              "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
            ],
            "ref": "refs/changes/29/8429/10",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1519951179000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 297,
            "sizeDeletions": -23
          },
          {
            "number": 11,
            "revision": "8c79e108a96b71a07aec4c1c3be4f858a9f8579a",
            "parents": [
              "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
            ],
            "ref": "refs/changes/29/8429/11",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1519951769000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 305,
            "sizeDeletions": -23
          },
          {
            "number": 12,
            "revision": "07f7c237cb002d2716de986cf4a62e47473332cf",
            "parents": [
              "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
            ],
            "ref": "refs/changes/29/8429/12",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1519953957000,
            "author": ids["zxiiro"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [],
            "sizeInsertions": 331,
            "sizeDeletions": -23
          },
          {
            "number": 13,
            "revision": "7cb6165fe7ea53316afd269734df2667ae51a693",
            "parents": [
              "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
            ],
            "ref": "refs/changes/29/8429/13",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1520027647000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1520028458000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1520027909000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 380,
            "sizeDeletions": -16
          },
          {
            "number": 14,
            "revision": "d1b623b1478d3c692e0cf0bd23fccf964dedb551",
            "parents": [
              "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
            ],
            "ref": "refs/changes/29/8429/14",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1520028666000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1520029039000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 380,
            "sizeDeletions": -16
          },
          {
            "number": 15,
            "revision": "f813b7436f6c4417bc1b99483bea903b2bce4720",
            "parents": [
              "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
            ],
            "ref": "refs/changes/29/8429/15",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1520029106000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1520272719000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1520029501000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 10,
                "reviewer": ids["zxiiro"],
                "message": "Let\u0027s provide a little more information in the commit message to explain setup and / or if this change requires upgrade attention from consumers.",
                "patchSetTimestamp": 1520029106000
              },
              {
                "file": "shell/jenkins-configure-clouds.sh",
                "line": 31,
                "reviewer": ids["cl778h"],
                "message": "Perhaps set -x ?",
                "patchSetTimestamp": 1520029106000
              },
              {
                "file": "shell/jenkins-configure-clouds.sh",
                "line": 31,
                "reviewer": ids["zxiiro"],
                "message": "Gave this a try but because of the nested loops in this file it absolutely spams the logs. I think a more precise `set -x`s or echos would be more useful in this file.\n\nAnother idea I\u0027ve been floating around is standardizing on a \"DEBUG_JOB\u003dtrue|false\" parameter for all scripts which will enable -x if the user checks the box at build time. This will allow us to easily turn it on / off.",
                "patchSetTimestamp": 1520029106000
              }
            ],
            "sizeInsertions": 383,
            "sizeDeletions": -16
          },
          {
            "number": 16,
            "revision": "9e954a95c65b2975d0b69e20b05c76db72a90fa1",
            "parents": [
              "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
            ],
            "ref": "refs/changes/29/8429/16",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1520277433000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1520277756000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 248,
                "reviewer": ids["zxiiro"],
                "message": "Probably should mention that troubleshooting logs are available in the groovy-inserts directory on the log server.",
                "patchSetTimestamp": 1520277433000
              },
              {
                "file": "docs/jjb/lf-ci-jobs.rst",
                "line": 248,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1520277433000
              }
            ],
            "sizeInsertions": 387,
            "sizeDeletions": -16
          },
          {
            "number": 17,
            "revision": "ab6f0b8b7680762c3db8e8751799c5bf8ff03208",
            "parents": [
              "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
            ],
            "ref": "refs/changes/29/8429/17",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1520279379000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1520283015000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1520279820000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/jenkins-configure-clouds.sh",
                "line": 133,
                "reviewer": ids["zxiiro"],
                "message": "INSTANCE_CAP_SANDBOX is too similar a name to INSTANCE_CAP that the grep will pick up the 2nd declaration. Need a different unique word like:\n\nSANDBOX_CAP",
                "patchSetTimestamp": 1520279379000
              },
              {
                "file": "shell/jenkins-configure-clouds.sh",
                "line": 133,
                "reviewer": ids["zxiiro"],
                "message": "Done",
                "patchSetTimestamp": 1520279379000
              }
            ],
            "sizeInsertions": 396,
            "sizeDeletions": -16
          },
          {
            "number": 18,
            "revision": "c26afec952891def4ae050c4a9d9d3a13dedd149",
            "parents": [
              "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff"
            ],
            "ref": "refs/changes/29/8429/18",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1520283147000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1520284981000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1520383652000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1520337137000,
                "grantedBy": ids["askb"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1520283499000,
                "grantedBy": ids["lf-jenkins"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1520329788000,
                "grantedBy": ids["fdegir"]
              }
            ],
            "comments": [],
            "sizeInsertions": 398,
            "sizeDeletions": -16
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "shell/jenkins-configure-clouds.sh",
          "line": 31,
          "reviewer": ids["cl778h"],
          "message": "Perhaps set -x ?",
          "patchSetTimestamp": 1520029106000
        }
      ]
    }
  ],
  "commentsReceived": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "Ia09f3194407f6c94d8cb1adfbb4d32e9a4592ff6",
        "commitNumber": 9109,
        "subject": "Make rtd jobs verbose",
        "owner": ids["cl778h"],
        "url": "https://gerrit.linuxfoundation.org/infra/9109",
        "commitMessage": "Make rtd jobs verbose\n\nAdd set -x flag so these scripts echo steps in Jenkins output.\n\nChange-Id: Ia09f3194407f6c94d8cb1adfbb4d32e9a4592ff6\nSigned-off-by: Lott, Christopher (cl778h) \u003ccl778h@att.com\u003e\n",
        "createdOnDate": 1519915269000,
        "lastUpdatedDate": 1519921072000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["agrimberg"],
          ids["zxiiro"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1519915269000,
            "reviewer": ids["cl778h"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1519915478000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/257/"
          },
          {
            "timestamp": 1519915656000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/257/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/257"
          },
          {
            "timestamp": 1519919884000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review+2\n\n(2 comments)\n\nShould fix the comment but can be done in another patch. I\u0027m good with this."
          },
          {
            "timestamp": 1519920380000,
            "reviewer": ids["cl778h"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1519920613000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/258/"
          },
          {
            "timestamp": 1519920788000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/258/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/258"
          },
          {
            "timestamp": 1519921045000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review+2"
          },
          {
            "timestamp": 1519921072000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "f35954d711199ac63bfa4d70591074f3d07f715b",
            "parents": [
              "0116521b32584814cbd2ad9f1dd84bfbe4fd381b"
            ],
            "ref": "refs/changes/09/9109/1",
            "uploader": ids["cl778h"],
            "createdOnDate": 1519915269000,
            "author": ids["cl778h"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1519919884000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1519915656000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/rtd-trigger-build.sh",
                "line": 14,
                "reviewer": ids["zxiiro"],
                "message": "There\u0027s nothing virtualenv in this script although it does need to ignore -u to access GERRIT_BRANCH properly.",
                "patchSetTimestamp": 1519915269000
              },
              {
                "file": "shell/rtd-verify.sh",
                "line": 14,
                "reviewer": ids["zxiiro"],
                "message": "Realized this comment a little wrong too as there\u0027s nothing virtualenv here but it does need it for GERRIT_* parameters.",
                "patchSetTimestamp": 1519915269000
              }
            ],
            "sizeInsertions": 5,
            "sizeDeletions": -1
          },
          {
            "number": 2,
            "revision": "338c1a22f1e7eccd2224b1d9bc72cdd7ae55ebff",
            "parents": [
              "0116521b32584814cbd2ad9f1dd84bfbe4fd381b"
            ],
            "ref": "refs/changes/09/9109/2",
            "uploader": ids["cl778h"],
            "createdOnDate": 1519920380000,
            "author": ids["cl778h"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1519921045000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1519921072000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1519920788000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 6,
            "sizeDeletions": -2
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "shell/rtd-trigger-build.sh",
          "line": 14,
          "reviewer": ids["zxiiro"],
          "message": "There\u0027s nothing virtualenv in this script although it does need to ignore -u to access GERRIT_BRANCH properly.",
          "patchSetTimestamp": 1519915269000
        },
        {
          "file": "shell/rtd-verify.sh",
          "line": 14,
          "reviewer": ids["zxiiro"],
          "message": "Realized this comment a little wrong too as there\u0027s nothing virtualenv here but it does need it for GERRIT_* parameters.",
          "patchSetTimestamp": 1519915269000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I70a1deefd23bc9498f6c6013fb8751298dec7f53",
        "commitNumber": 8566,
        "subject": "Refactor macro/template cron param",
        "owner": ids["cl778h"],
        "url": "https://gerrit.linuxfoundation.org/infra/8566",
        "commitMessage": "Refactor macro/template cron param\n\nBe consistent with cron parameter: define in macro, use in template.\nNever hard-code a trigger in a job template.\nDocument the parameters in the RST file.\n\nChange-Id: I70a1deefd23bc9498f6c6013fb8751298dec7f53\nSigned-off-by: Christopher Lott (cl778h) \u003cclott@research.att.com\u003e\n",
        "createdOnDate": 1517248426000,
        "lastUpdatedDate": 1517254712000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["cl778h"]
        ],
        "comments": [
          {
            "timestamp": 1517248426000,
            "reviewer": ids["cl778h"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1517248612000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review-1\n\n(3 comments)\n\nWould be good to document these settings in docs/lf-maven-jobs.rst as well."
          },
          {
            "timestamp": 1517248817000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/202/"
          },
          {
            "timestamp": 1517248835000,
            "reviewer": ids["cl778h"],
            "message": "Patch Set 1:\n\nA challenge here is how to use job groups and supply different values to cron/trigger parameters.  Different templates use the same parameter name \"cron\"."
          },
          {
            "timestamp": 1517248970000,
            "reviewer": ids["cl778h"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1517249046000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/202/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/202"
          },
          {
            "timestamp": 1517249053000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1517251833000,
            "reviewer": ids["cl778h"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1517251923000,
            "reviewer": ids["cl778h"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1517252042000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/203/"
          },
          {
            "timestamp": 1517252282000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/203/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/203"
          },
          {
            "timestamp": 1517252325000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1517252427000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review-1\n\nWe should make sure the documentation is updated for the new cron parameter. I can take care of it later if you don\u0027t get to it first."
          },
          {
            "timestamp": 1517252448000,
            "reviewer": ids["cl778h"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1517252664000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/204/ (1/2)"
          },
          {
            "timestamp": 1517252680000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/66/ (2/2)"
          },
          {
            "timestamp": 1517252996000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/204/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/204\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/66/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/66"
          },
          {
            "timestamp": 1517254710000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 3: Code-Review+2"
          },
          {
            "timestamp": 1517254712000,
            "reviewer": ids["zxiiro"],
            "message": "Change has been successfully merged by Thanh Ha"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "7ace36025a0b1bd46b98b601046f1b6fb8bcff7d",
            "parents": [
              "cc00605631e750be1698bd247442172c483a7e9b"
            ],
            "ref": "refs/changes/66/8566/1",
            "uploader": ids["cl778h"],
            "createdOnDate": 1517248426000,
            "author": ids["cl778h"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1517248612000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1517249046000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 471,
                "reviewer": ids["zxiiro"],
                "message": "We don\u0027t want this to be a weekly procedure by default. Projects should override this in their project.yaml file in the \"project\" section.\n\nThis should default to (\u0027\u0027) blank.",
                "patchSetTimestamp": 1517248426000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 542,
                "reviewer": ids["cl778h"],
                "message": "Thanh, similar to the sonar template behavior and my change: the old template was hardcoded to run weekly; the new template uses a parameter value from the macro to run weekly.  What\u0027s your thought about the merge job default?",
                "patchSetTimestamp": 1517248426000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 542,
                "reviewer": ids["zxiiro"],
                "message": "Yes, this is the same situation. Please keep the cron setting defaulting to the same behaviour as it was before.\n\nThe reason we need to run merge jobs on a weekly basis is to ensure that artifacts are refreshed in Nexus since they will be deleted automatically from Nexus if they are 3 weeks old.",
                "patchSetTimestamp": 1517248426000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 601,
                "reviewer": ids["zxiiro"],
                "message": "Same here.",
                "patchSetTimestamp": 1517248426000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 712,
                "reviewer": ids["zxiiro"],
                "message": "same here",
                "patchSetTimestamp": 1517248426000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 757,
                "reviewer": ids["cl778h"],
                "message": "Thanh, it appears to me that the sonar job is currently hard-wired to run weekly via the timed trigger.  My change moves the value of the trigger to a parameter in the macro but does not change the behavior.  Your Gerrit comment suggests that you do NOT want it hard-wired to run weekly.  Please clarify.",
                "patchSetTimestamp": 1517248426000
              },
              {
                "file": "jjb/lf-maven-jobs.yaml",
                "line": 757,
                "reviewer": ids["zxiiro"],
                "message": "ah I missed that this one was the sonar job. Yes in this case the code here is fine. For the other templates please default to a blank cron job.\n\nThanks for catching this!",
                "patchSetTimestamp": 1517248426000
              }
            ],
            "sizeInsertions": 5,
            "sizeDeletions": -4
          },
          {
            "number": 2,
            "revision": "a17c2ea98abb8958c56eddfc6727b746315f2f8b",
            "parents": [
              "cc00605631e750be1698bd247442172c483a7e9b"
            ],
            "ref": "refs/changes/66/8566/2",
            "uploader": ids["cl778h"],
            "createdOnDate": 1517251923000,
            "author": ids["cl778h"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1517252427000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1517252282000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 4,
            "sizeDeletions": -3
          },
          {
            "number": 3,
            "revision": "bc80d1d2ea640dfedb2dcfa5097c5ff275c36b71",
            "parents": [
              "cc00605631e750be1698bd247442172c483a7e9b"
            ],
            "ref": "refs/changes/66/8566/3",
            "uploader": ids["cl778h"],
            "createdOnDate": 1517252448000,
            "author": ids["cl778h"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1517254710000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1517254712000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1517252996000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 12,
            "sizeDeletions": -3
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 471,
          "reviewer": ids["zxiiro"],
          "message": "We don\u0027t want this to be a weekly procedure by default. Projects should override this in their project.yaml file in the \"project\" section.\n\nThis should default to (\u0027\u0027) blank.",
          "patchSetTimestamp": 1517248426000
        },
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 542,
          "reviewer": ids["zxiiro"],
          "message": "Yes, this is the same situation. Please keep the cron setting defaulting to the same behaviour as it was before.\n\nThe reason we need to run merge jobs on a weekly basis is to ensure that artifacts are refreshed in Nexus since they will be deleted automatically from Nexus if they are 3 weeks old.",
          "patchSetTimestamp": 1517248426000
        },
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 601,
          "reviewer": ids["zxiiro"],
          "message": "Same here.",
          "patchSetTimestamp": 1517248426000
        },
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 712,
          "reviewer": ids["zxiiro"],
          "message": "same here",
          "patchSetTimestamp": 1517248426000
        },
        {
          "file": "jjb/lf-maven-jobs.yaml",
          "line": 757,
          "reviewer": ids["zxiiro"],
          "message": "ah I missed that this one was the sonar job. Yes in this case the code here is fine. For the other templates please default to a blank cron job.\n\nThanks for catching this!",
          "patchSetTimestamp": 1517248426000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 6,
        "commentCount": 7,
        "approvals": {
          "-1": 2,
          "2": 4
        }
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["agrimberg"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "repositories": {
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 4,
            "approvals": {}
          }
        },
        {
          "identity": ids["jeremyphelps"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 3
    }
  },
  "averageTimeInCodeReview": 4330666,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 4,
            "approvals": {}
          }
        },
        {
          "identity": ids["jeremyphelps"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 1,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 3
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};