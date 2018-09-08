userdata['zdw'] = {
  "identity": ids["zdw"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1526355760000,
  "lastActiveDate": 1527787935000,
  "activeDayCount": 2,
  "commits": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I36986889ecea9a72b238a886146bb5faa10c9672",
      "commitNumber": 10635,
      "subject": "Add *.groovy as a filetype trigger to ci-verify",
      "owner": ids["zdw"],
      "url": "https://gerrit.linuxfoundation.org/infra/10635",
      "commitMessage": "Add *.groovy as a filetype trigger to ci-verify\n\nAdd support for Jenkinsfile to trigger ci-verify jobs.\n\nChange-Id: I36986889ecea9a72b238a886146bb5faa10c9672\nSigned-off-by: Zack Williams \u003czdw@opennetworking.org\u003e\n",
      "createdOnDate": 1526355760000,
      "lastUpdatedDate": 1527787935000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1526355760000,
          "reviewer": ids["zdw"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1526355822000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/439/"
        },
        {
          "timestamp": 1526356028000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/439/ : FAILURE\n\nThe commit message shortlog (1st line in commit message) is too long. It should be 50 characters or less in length. Please update the commit message as necessary to pass this check. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/439/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/439"
        },
        {
          "timestamp": 1526383347000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review-1\n\nHi Zach, are you wanting to add pipeline support got gobal-jjb?  If so note the \"project-type: freestyle\" setting on this particular job would prevent that.  I can def work with you on adding support for this though.  Check out some of these docs here https://docs.openstack.org/infra/jenkins-job-builder/project_pipeline.html."
        },
        {
          "timestamp": 1527786426000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nI\u0027m fine with adding this trigger. The build is failing due to the commit message header. We just need to trim to to 50 or less characters."
        },
        {
          "timestamp": 1527787328000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1527787342000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1527787491000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/455/"
        },
        {
          "timestamp": 1527787631000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/455/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/455"
        },
        {
          "timestamp": 1527787934000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1527787935000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "abfc42fc423d5b390c4d851fc0888081b15f13e8",
          "parents": [
            "492598352aa58d3aace7f944ef8e7a8a2e82c8a2"
          ],
          "ref": "refs/changes/35/10635/1",
          "uploader": ids["zdw"],
          "createdOnDate": 1526355760000,
          "author": ids["zdw"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1526383347000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1526356028000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "1951f33be3a2821aae915b46d193fadebe66b660",
          "parents": [
            "9b240453b91f3c4b0844ea1c593721a1c421caa2"
          ],
          "ref": "refs/changes/35/10635/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1527787328000,
          "author": ids["zdw"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1527787934000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1527787935000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1527787342000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1527787631000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        }
      ]
    }
  ],
  "addedAsReviewerTo": [],
  "reviewRequestors": [],
  "commentsWritten": [],
  "commentsReceived": [],
  "reviewersForOwnCommits": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "2": 1
        }
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["jeremyphelps"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "-1": 1
        }
      }
    },
    {
      "identity": ids["agrimberg"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "2": 1
        }
      }
    }
  ],
  "repositories": {
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 1
    }
  },
  "averageTimeInCodeReview": 1432175000,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 1
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};